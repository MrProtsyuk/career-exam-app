import { describe, it, expect } from 'vitest';
import { DIMENSIONS } from './dimensions.js';
import { QUESTION_BANK, CATEGORIES } from './questions.js';
import { CAREERS } from './careers.js';
import { attainableRange } from '../engine/scoring.js';
import { FORM_QUOTAS } from '../engine/form.js';

const DIM_KEYS = DIMENSIONS.map((d) => d.key);

describe('question bank', () => {
  it('is large enough that sampled forms stay fresh (90+ questions)', () => {
    expect(QUESTION_BANK.length).toBeGreaterThanOrEqual(90);
  });

  it('has unique question ids', () => {
    const ids = QUESTION_BANK.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every question 4-5 options', () => {
    for (const q of QUESTION_BANK) {
      expect(q.options.length, q.id).toBeGreaterThanOrEqual(4);
      expect(q.options.length, q.id).toBeLessThanOrEqual(5);
    }
  });

  it('covers all five spec categories with at least double the form quota', () => {
    const expected = ['academic', 'values', 'hobbies', 'personality', 'workstyle'];
    expect(CATEGORIES.map((c) => c.key)).toEqual(expected);
    for (const cat of expected) {
      const count = QUESTION_BANK.filter((q) => q.category === cat).length;
      expect(count, cat).toBeGreaterThanOrEqual(FORM_QUOTAS[cat] * 2);
    }
  });

  it('assigns every question a known category', () => {
    const known = new Set(CATEGORIES.map((c) => c.key));
    for (const q of QUESTION_BANK) {
      expect(known.has(q.category), q.id).toBe(true);
    }
  });

  it('gives every option at least one nonzero weight on a known dimension', () => {
    for (const q of QUESTION_BANK) {
      for (const o of q.options) {
        const entries = Object.entries(o.weights);
        expect(entries.length, `${q.id} "${o.label}"`).toBeGreaterThan(0);
        for (const [key, w] of entries) {
          expect(DIM_KEYS, `${q.id} weight key ${key}`).toContain(key);
          expect(typeof w).toBe('number');
        }
        expect(
          entries.some(([, w]) => w !== 0),
          `${q.id} "${o.label}" has only zero weights`
        ).toBe(true);
      }
    }
  });

  it('can move every dimension across the bank', () => {
    const range = attainableRange(QUESTION_BANK);
    for (const key of DIM_KEYS) {
      expect(range[key].max, key).toBeGreaterThan(range[key].min);
    }
  });

  it('lets every category move several dimensions (no one-note categories)', () => {
    for (const cat of CATEGORIES) {
      const subset = QUESTION_BANK.filter((q) => q.category === cat.key);
      const range = attainableRange(subset);
      const movable = DIM_KEYS.filter(
        (k) => range[k].max > range[k].min
      ).length;
      expect(movable, cat.key).toBeGreaterThanOrEqual(6);
    }
  });
});

describe('career dataset', () => {
  it('has at least 40 careers', () => {
    expect(CAREERS.length).toBeGreaterThanOrEqual(40);
  });

  it('has unique ids and names', () => {
    const ids = CAREERS.map((c) => c.id);
    const names = CAREERS.map((c) => c.name);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(names).size).toBe(names.length);
  });

  it('gives every career the required descriptive fields', () => {
    for (const c of CAREERS) {
      expect(c.name, c.id).toBeTruthy();
      expect(c.description.length, c.id).toBeGreaterThan(20);
      expect(c.education, c.id).toBeTruthy();
      expect(c.titles.length, c.id).toBeGreaterThanOrEqual(2);
    }
  });

  it('scores every career on all 10 dimensions in [0,1]', () => {
    for (const c of CAREERS) {
      for (const key of DIM_KEYS) {
        expect(c.vector[key], `${c.id}.${key}`).toBeTypeOf('number');
        expect(c.vector[key], `${c.id}.${key}`).toBeGreaterThanOrEqual(0);
        expect(c.vector[key], `${c.id}.${key}`).toBeLessThanOrEqual(1);
      }
      expect(Object.keys(c.vector).length, c.id).toBe(DIM_KEYS.length);
    }
  });

  it('gives every career a non-flat profile so correlation is defined', () => {
    for (const c of CAREERS) {
      const vals = Object.values(c.vector);
      expect(new Set(vals).size, c.id).toBeGreaterThan(1);
    }
  });
});
