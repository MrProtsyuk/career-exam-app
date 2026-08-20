import { describe, it, expect } from 'vitest';
import { QUESTION_BANK } from '../data/questions.js';
import { CAREERS } from '../data/careers.js';
import { buildUserVector, rankCareers } from './scoring.js';
import { buildForm, mulberry32 } from './form.js';

// End-to-end coherence checks: themed answer patterns pushed through
// randomly sampled forms should still surface thematically fitting careers,
// whichever questions were drawn. These guard the instrument itself.

/** Answer every question in a form with the option maximizing `score`. */
function answerBy(form, score) {
  const answers = {};
  for (const q of form) {
    let best = 0;
    let bestScore = -Infinity;
    q.options.forEach((o, i) => {
      const s = score(o.weights);
      if (s > bestScore) {
        bestScore = s;
        best = i;
      }
    });
    answers[q.id] = best;
  }
  return answers;
}

function topIds(form, answers, n) {
  const vec = buildUserVector(form, answers);
  return rankCareers(vec, CAREERS)
    .slice(0, n)
    .map((r) => r.career.id);
}

const SEEDS = [11, 22, 33, 44, 55];

describe('full pipeline over sampled forms', () => {
  it('produces a complete, finite vector in [0,1] for an arbitrary run', () => {
    const form = buildForm(QUESTION_BANK, mulberry32(99));
    const answers = {};
    for (const q of form) answers[q.id] = 0;
    const vec = buildUserVector(form, answers);
    for (const [key, v] of Object.entries(vec)) {
      expect(Number.isFinite(v), key).toBe(true);
      expect(v, key).toBeGreaterThanOrEqual(0);
      expect(v, key).toBeLessThanOrEqual(1);
    }
  });

  it('keeps every match score in [0,100] with no NaN across patterns', () => {
    const patterns = [
      (w) => (w.A ?? 0),
      (w) => (w.I ?? 0) + (w.technical ?? 0),
      (w) => (w.S ?? 0) + (w.people ?? 0),
      (w) => (w.E ?? 0) + (w.risk ?? 0),
      (w) => (w.R ?? 0),
      (w) => (w.C ?? 0) - (w.risk ?? 0),
    ];
    const form = buildForm(QUESTION_BANK, mulberry32(123));
    for (const p of patterns) {
      const vec = buildUserVector(form, answerBy(form, p));
      for (const r of rankCareers(vec, CAREERS)) {
        expect(Number.isFinite(r.matchPct)).toBe(true);
        expect(r.matchPct).toBeGreaterThanOrEqual(0);
        expect(r.matchPct).toBeLessThanOrEqual(100);
      }
    }
  });

  it('ranks artistic careers highly for a consistently artistic pattern', () => {
    const artistic = ['writer', 'graphic-designer', 'musician', 'filmmaker', 'photographer', 'ceramicist-craft-artist', 'interior-designer', 'fashion-designer'];
    for (const seed of SEEDS) {
      const form = buildForm(QUESTION_BANK, mulberry32(seed));
      const top = topIds(form, answerBy(form, (w) => (w.A ?? 0) - (w.C ?? 0)), 8);
      expect(top.some((id) => artistic.includes(id)), `seed ${seed}: ${top}`).toBe(true);
      expect(top, `seed ${seed}`).not.toContain('accountant');
    }
  });

  it('ranks quantitative/technical careers highly for an investigative-technical pattern', () => {
    const technical = ['software-engineer', 'data-scientist', 'statistician', 'research-scientist', 'mechanical-engineer', 'actuary', 'cybersecurity-analyst', 'biomedical-engineer', 'operations-research-analyst', 'sysadmin'];
    for (const seed of SEEDS) {
      const form = buildForm(QUESTION_BANK, mulberry32(seed));
      const top = topIds(form, answerBy(form, (w) => (w.I ?? 0) + (w.technical ?? 0)), 8);
      expect(top.some((id) => technical.includes(id)), `seed ${seed}: ${top}`).toBe(true);
    }
  });

  it('ranks helping careers highly for a social/people pattern', () => {
    const social = ['teacher', 'nurse', 'social-worker', 'psychologist', 'speech-pathologist', 'hr-manager', 'physical-therapist', 'sports-coach', 'dietitian'];
    for (const seed of SEEDS) {
      const form = buildForm(QUESTION_BANK, mulberry32(seed));
      const top = topIds(form, answerBy(form, (w) => (w.S ?? 0) + (w.people ?? 0)), 8);
      expect(top.some((id) => social.includes(id)), `seed ${seed}: ${top}`).toBe(true);
    }
  });
});
