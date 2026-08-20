// Form builder: assembles a fresh exam form for each session by sampling
// questions per category from the bank and shuffling each question's answer
// options, so no two sittings look alike — while scoring stays identical
// (weights travel with their option objects).

import { CATEGORIES } from '../data/questions.js';
import { DIMENSIONS } from '../data/dimensions.js';
import { attainableRange } from './scoring.js';

/** Items administered per category; totals the classic 36-item form. */
export const FORM_QUOTAS = {
  academic: 8,
  values: 7,
  hobbies: 7,
  personality: 7,
  workstyle: 7,
};

/**
 * Small deterministic PRNG (mulberry32). Used with a fixed seed in tests;
 * the app seeds a session with a random seed via Math.random by default.
 */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates shuffle into a new array. */
function shuffled(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build one exam form: FORM_QUOTAS[cat] questions per category (question
 * order randomized within each category block), each question's options
 * shuffled. Re-samples (bounded) in the astronomically unlikely event a
 * draw leaves some trait dimension immovable, so normalization always has
 * a real range to work with.
 */
export function buildForm(bank, rng = Math.random) {
  let form = null;
  for (let attempt = 0; attempt < 20; attempt++) {
    form = [];
    for (const cat of CATEGORIES) {
      const pool = bank.filter((q) => q.category === cat.key);
      const quota = FORM_QUOTAS[cat.key];
      if (pool.length < quota) {
        throw new Error(
          `Category "${cat.key}" has ${pool.length} questions; needs ${quota}`
        );
      }
      const picked = shuffled(pool, rng).slice(0, quota);
      for (const q of picked) {
        form.push({ ...q, options: shuffled(q.options, rng) });
      }
    }
    const range = attainableRange(form);
    const allMovable = DIMENSIONS.every(
      (d) => range[d.key].max > range[d.key].min
    );
    if (allMovable) return form;
  }
  return form;
}
