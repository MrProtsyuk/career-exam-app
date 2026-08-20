// Scoring engine: deterministic, fully client-side statistical matching.
//
// Pipeline:
//   1. Sum the signed trait weights of every chosen answer option.
//   2. Normalize each trait by the questionnaire's attainable range so every
//      trait lands in [0,1] regardless of how many questions touch it.
//   3. Compare the user profile against each career profile with Pearson
//      profile correlation (cosine similarity of mean-centered vectors),
//      a standard profile-shape metric.
//   4. Map correlation r in [-1,1] to a 0-100% match score.

import { DIMENSIONS } from '../data/dimensions.js';

const DIM_KEYS = DIMENSIONS.map((d) => d.key);

/**
 * For each dimension d, the extremes of the raw score a respondent could
 * reach:  min[d] = Σ_q min_o w_qo[d]   and   max[d] = Σ_q max_o w_qo[d],
 * where w_qo[d] is option o's weight on d (0 when omitted).
 */
export function attainableRange(questions) {
  const range = {};
  for (const key of DIM_KEYS) range[key] = { min: 0, max: 0 };
  for (const q of questions) {
    for (const key of DIM_KEYS) {
      const weights = q.options.map((o) => o.weights[key] ?? 0);
      range[key].min += Math.min(...weights);
      range[key].max += Math.max(...weights);
    }
  }
  return range;
}

/**
 * Build the normalized user trait vector.
 *
 * raw[d]  = Σ over answered questions of the chosen option's weight on d
 * norm[d] = (raw[d] - min[d]) / (max[d] - min[d])   ∈ [0,1]
 *
 * A dimension the questionnaire cannot move (max == min) is set to the
 * neutral midpoint 0.5 so it neither attracts nor repels any career.
 *
 * `answers` maps question id -> chosen option index. Every question must be
 * answered; normalization is only meaningful over the full instrument.
 */
export function buildUserVector(questions, answers) {
  const raw = {};
  for (const key of DIM_KEYS) raw[key] = 0;
  for (const q of questions) {
    const choice = answers[q.id];
    if (choice === undefined || choice === null) {
      throw new Error(`Question "${q.id}" is unanswered`);
    }
    const weights = q.options[choice].weights;
    for (const [key, w] of Object.entries(weights)) {
      raw[key] += w;
    }
  }
  const range = attainableRange(questions);
  const vec = {};
  for (const key of DIM_KEYS) {
    const { min, max } = range[key];
    vec[key] = max === min ? 0.5 : (raw[key] - min) / (max - min);
  }
  return vec;
}

/**
 * Cosine similarity:  cos(a,b) = (a·b) / (|a| |b|)
 * where a·b = Σ a_i b_i and |a| = sqrt(Σ a_i²).
 * Returns 0 if either vector has zero magnitude (undefined angle).
 */
export function cosineSimilarity(a, b) {
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

/** Dimension keys shared by two profile objects, in DIMENSIONS order. */
function sharedKeys(u, c) {
  return DIM_KEYS.filter((k) => k in u && k in c);
}

/**
 * Pearson profile correlation between two trait profiles:
 *
 *   r = Σ (u_i - ū)(c_i - c̄) / sqrt( Σ (u_i - ū)² · Σ (c_i - c̄)² )
 *
 * which is exactly the cosine similarity of the mean-centered vectors.
 * It measures agreement in profile *shape* — whether the same traits are
 * relatively high and relatively low — independent of overall elevation.
 * A flat profile has no shape, so r is defined as 0.
 */
export function profileSimilarity(u, c) {
  const keys = sharedKeys(u, c);
  const uVals = keys.map((k) => u[k]);
  const cVals = keys.map((k) => c[k]);
  const uMean = uVals.reduce((s, v) => s + v, 0) / uVals.length;
  const cMean = cVals.reduce((s, v) => s + v, 0) / cVals.length;
  return cosineSimilarity(
    uVals.map((v) => v - uMean),
    cVals.map((v) => v - cMean)
  );
}

/**
 * Rank every career by similarity to the user profile.
 * Match % maps r ∈ [-1,1] linearly onto [0,100]:  pct = round((r+1)/2 · 100).
 */
export function rankCareers(userVec, careers) {
  return careers
    .map((career) => {
      const similarity = profileSimilarity(userVec, career.vector);
      return {
        career,
        similarity,
        matchPct: Math.round(((similarity + 1) / 2) * 100),
        drivers: topDrivers(userVec, career.vector, 3),
      };
    })
    .sort((a, b) => b.similarity - a.similarity);
}

/**
 * The dimensions that drove a match: each dimension's contribution to the
 * correlation numerator is (u_d - ū)(c_d - c̄). We surface the largest
 * positive contributions where the user is *above* their own average —
 * i.e. traits the user actually leans toward that the career also rewards.
 */
export function topDrivers(userVec, careerVec, n = 3) {
  const keys = sharedKeys(userVec, careerVec);
  const uVals = keys.map((k) => userVec[k]);
  const cVals = keys.map((k) => careerVec[k]);
  const uMean = uVals.reduce((s, v) => s + v, 0) / uVals.length;
  const cMean = cVals.reduce((s, v) => s + v, 0) / cVals.length;
  return keys
    .map((k, i) => ({
      key: k,
      userLean: uVals[i] - uMean,
      contribution: (uVals[i] - uMean) * (cVals[i] - cMean),
    }))
    .filter((d) => d.contribution > 0 && d.userLean > 0)
    .sort((a, b) => b.contribution - a.contribution)
    .slice(0, n)
    .map((d) => d.key);
}
