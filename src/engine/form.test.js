import { describe, it, expect } from 'vitest';
import { buildForm, mulberry32, FORM_QUOTAS } from './form.js';
import { QUESTION_BANK, CATEGORIES } from '../data/questions.js';
import { DIMENSIONS } from '../data/dimensions.js';
import { attainableRange } from './scoring.js';

const FORM_SIZE = Object.values(FORM_QUOTAS).reduce((s, n) => s + n, 0);

describe('mulberry32', () => {
  it('is deterministic for a given seed and produces values in [0,1)', () => {
    const a = mulberry32(42);
    const b = mulberry32(42);
    for (let i = 0; i < 50; i++) {
      const v = a();
      expect(v).toBe(b());
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});

describe('buildForm', () => {
  it('draws exactly the quota from each category, in category block order', () => {
    const form = buildForm(QUESTION_BANK, mulberry32(1));
    expect(form.length).toBe(FORM_SIZE);
    const expected = CATEGORIES.flatMap((c) =>
      Array(FORM_QUOTAS[c.key]).fill(c.key)
    );
    expect(form.map((q) => q.category)).toEqual(expected);
  });

  it('selects unique questions that all come from the bank', () => {
    const form = buildForm(QUESTION_BANK, mulberry32(2));
    const ids = form.map((q) => q.id);
    expect(new Set(ids).size).toBe(FORM_SIZE);
    const bankIds = new Set(QUESTION_BANK.map((q) => q.id));
    for (const id of ids) expect(bankIds.has(id)).toBe(true);
  });

  it('is deterministic for the same seed and different across seeds', () => {
    const a = buildForm(QUESTION_BANK, mulberry32(7));
    const b = buildForm(QUESTION_BANK, mulberry32(7));
    const c = buildForm(QUESTION_BANK, mulberry32(8));
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    expect(JSON.stringify(a)).not.toBe(JSON.stringify(c));
  });

  it('keeps each question’s options as a permutation of the originals', () => {
    const form = buildForm(QUESTION_BANK, mulberry32(3));
    const byId = Object.fromEntries(QUESTION_BANK.map((q) => [q.id, q]));
    for (const q of form) {
      const original = byId[q.id].options.map((o) => o.label).sort();
      const shuffledLabels = q.options.map((o) => o.label).sort();
      expect(shuffledLabels).toEqual(original);
    }
  });

  it('actually shuffles option order (some question differs from bank order)', () => {
    const form = buildForm(QUESTION_BANK, mulberry32(4));
    const byId = Object.fromEntries(QUESTION_BANK.map((q) => [q.id, q]));
    const anyReordered = form.some(
      (q) =>
        q.options.map((o) => o.label).join('|') !==
        byId[q.id].options.map((o) => o.label).join('|')
    );
    expect(anyReordered).toBe(true);
  });

  it('never returns a form with an immovable dimension', () => {
    for (let seed = 1; seed <= 60; seed++) {
      const form = buildForm(QUESTION_BANK, mulberry32(seed));
      const range = attainableRange(form);
      for (const d of DIMENSIONS) {
        expect(range[d.key].max, `seed ${seed} dim ${d.key}`).toBeGreaterThan(
          range[d.key].min
        );
      }
    }
  });

  it('throws when a category pool cannot fill its quota', () => {
    const tinyBank = QUESTION_BANK.filter((q) => q.category !== 'values').concat(
      QUESTION_BANK.filter((q) => q.category === 'values').slice(0, 2)
    );
    expect(() => buildForm(tinyBank, mulberry32(1))).toThrow(/values/);
  });
});
