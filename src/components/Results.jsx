import { useMemo, useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { DIMENSIONS, DIMENSION_BY_KEY } from '../data/dimensions.js';
import { buildUserVector, rankCareers } from '../engine/scoring.js';

const TOP_N = 6;
// Chart colors mirror the CSS tokens (SVG attributes can't read CSS vars).
const FORM_GREEN = '#2e7d6e';
const GRID_GREEN = '#bcd4cc';
const PENCIL = '#6d7684';

function AxisBar({ dim, value }) {
  const pct = Math.round(value * 100);
  const leansHigh = value >= 0.5;
  return (
    <div className="axis">
      <div className="axis-poles">
        <span className={leansHigh ? '' : 'active'}>{dim.poleLow}</span>
        <span className={leansHigh ? 'active' : ''}>{dim.poleHigh}</span>
      </div>
      <div
        className="axis-track"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={`${dim.label}: ${pct} of 100 toward ${dim.poleHigh}`}
      >
        <span className="axis-dot" style={{ left: `${pct}%` }} />
      </div>
    </div>
  );
}

function driverSentence(drivers) {
  if (drivers.length === 0) {
    return 'Matched on overall profile shape.';
  }
  const parts = drivers.map((k) => DIMENSION_BY_KEY[k].label);
  const list =
    parts.length === 1
      ? parts[0]
      : `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}`;
  return `Driven by your ${list} scores.`;
}

function buildReportText(userVec, ranked, questionCount) {
  const lines = [];
  lines.push('CAREER DISCOVERY — SCORE REPORT');
  lines.push(`Form CD-${questionCount} · ${new Date().toLocaleDateString()}`);
  lines.push('');
  lines.push('TRAIT PROFILE (0–100)');
  for (const d of DIMENSIONS) {
    const score = String(Math.round(userVec[d.key] * 100)).padStart(3, ' ');
    lines.push(`  ${d.label.padEnd(18, ' ')} ${score}`);
  }
  lines.push('');
  lines.push('RANKED CAREER MATCHES');
  ranked.forEach((r, i) => {
    lines.push(
      `  ${String(i + 1).padStart(2, ' ')}. ${r.career.name.padEnd(34, ' ')} ${String(r.matchPct).padStart(3, ' ')}%`
    );
  });
  lines.push('');
  lines.push('METHOD');
  lines.push(
    '  Answers are summed into a 10-trait vector (RIASEC + 4 axes), normalized'
  );
  lines.push(
    '  by the attainable range of each trait, then compared to every career'
  );
  lines.push(
    '  profile with Pearson profile correlation. Match % maps r in [-1, 1]'
  );
  lines.push('  linearly onto 0–100. Computed entirely on-device.');
  return lines.join('\n');
}

export default function Results({ questions, careers, answers, onRetake }) {
  const [showAll, setShowAll] = useState(false);

  const userVec = useMemo(
    () => buildUserVector(questions, answers),
    [questions, answers]
  );
  const ranked = useMemo(
    () => rankCareers(userVec, careers),
    [userVec, careers]
  );

  const radarData = DIMENSIONS.filter((d) => d.group === 'riasec').map(
    (d) => ({
      trait: d.label,
      score: Math.round(userVec[d.key] * 100),
    })
  );
  const axes = DIMENSIONS.filter((d) => d.group === 'axis');
  const top = ranked.slice(0, TOP_N);
  const rest = ranked.slice(TOP_N);

  const download = () => {
    const text = buildReportText(userVec, ranked, questions.length);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'career-discovery-report.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="results">
      <div className="report-head">
        <div>
          <span className="report-code">
            Score report · Form CD-{questions.length} ·{' '}
            {new Date().toLocaleDateString()}
          </span>
          <h1>Your career profile</h1>
        </div>
        <div className="report-actions">
          <button className="btn-outline" onClick={download}>
            Download report
          </button>
          <button className="btn-outline" onClick={onRetake}>
            Retake
          </button>
        </div>
      </div>

      <section aria-label="Trait profile">
        <h2 className="section-label">Trait profile</h2>
        <div className="profile-grid">
          <div className="radar-card">
            <ResponsiveContainer width="100%" height={340}>
              <RadarChart data={radarData} outerRadius="72%">
                <PolarGrid stroke={GRID_GREEN} />
                <PolarAngleAxis
                  dataKey="trait"
                  tick={{ fill: PENCIL, fontSize: 12.5, fontFamily: 'inherit' }}
                />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  dataKey="score"
                  stroke={FORM_GREEN}
                  strokeWidth={2}
                  fill={FORM_GREEN}
                  fillOpacity={0.22}
                  isAnimationActive={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="axes">
            {axes.map((dim) => (
              <AxisBar key={dim.key} dim={dim} value={userVec[dim.key]} />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Top matches">
        <h2 className="section-label">
          Top {top.length} of {ranked.length} careers
        </h2>
        <div className="matches">
          {top.map((r, i) => (
            <article
              className="match"
              key={r.career.id}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="match-pct">
                <span className="match-rank">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {r.matchPct}
                <small>%</small>
              </div>
              <div className="match-body">
                <h3>{r.career.name}</h3>
                <p>{r.career.description}</p>
                <div className="match-drivers">
                  <span className="driver-lead">{driverSentence(r.drivers)}</span>
                  {r.drivers.map((k) => (
                    <span className="driver" key={k} title={DIMENSION_BY_KEY[k].blurb}>
                      {DIMENSION_BY_KEY[k].label}
                    </span>
                  ))}
                </div>
                <p className="match-meta">
                  <strong>Titles:</strong> {r.career.titles.join(' · ')}
                  <br />
                  <strong>Path:</strong> {r.career.education}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="full-list" aria-label="Full ranking">
        <button className="toggle-list" onClick={() => setShowAll(!showAll)}>
          {showAll
            ? 'Hide full ranking ↑'
            : `Show the full ranking — all ${ranked.length} careers ↓`}
        </button>
        {showAll && (
          <table className="rank-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Career</th>
                <th className="bar-cell">Similarity</th>
                <th style={{ textAlign: 'right' }}>Match</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((r, i) => (
                <tr key={r.career.id}>
                  <td className="num">{i + 1}</td>
                  <td>{r.career.name}</td>
                  <td className="bar-cell">
                    <div className="rank-bar">
                      <span style={{ width: `${r.matchPct}%` }} />
                    </div>
                  </td>
                  <td className="pct">{r.matchPct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="method" aria-label="How this works">
        <h2>How this works</h2>
        <p>
          Every answer you chose carries small, pre-assigned weights on 10
          trait dimensions: the six RIASEC interest types (Realistic,
          Investigative, Artistic, Social, Enterprising, Conventional) plus
          four axes — people-orientation, risk tolerance, autonomy, and
          technical-versus-creative leaning.
        </p>
        <p>
          Your weights are summed and normalized by the best and worst score
          this questionnaire could possibly produce on each trait, which
          places every trait on a 0–100 scale. Each career in the database
          carries a profile on the same 10 dimensions, informed by O*NET-style
          occupational interest codes.
        </p>
        <p>
          The match score is the <code>Pearson profile correlation</code>{' '}
          between your profile and each career&rsquo;s — equivalently, the
          cosine similarity of the mean-centered vectors. It rewards agreement
          in <em>shape</em>: the same traits running relatively high and
          relatively low. The correlation <code>r ∈ [−1, 1]</code> is mapped
          linearly to the 0–100% match you see. No AI model, no server — you
          can read every weight in the page source.
        </p>
      </section>

      <div className="results-foot">
        <button className="btn-outline" onClick={download}>
          Download report
        </button>
        <button className="btn-outline" onClick={onRetake}>
          Retake the questionnaire
        </button>
      </div>
    </main>
  );
}
