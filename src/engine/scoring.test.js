import { describe, it, expect } from 'vitest';
import {
  attainableRange,
  buildUserVector,
  cosineSimilarity,
  profileSimilarity,
  rankCareers,
  topDrivers,
} from './scoring.js';

// A tiny questionnaire used across tests. Weights are signed contributions
// to trait dimensions; omitted dimensions contribute 0.
const questions = [
  {
    id: 'q1',
    text: 'Pick one',
    options: [
      { label: 'a', weights: { R: 2, I: 1 } },
      { label: 'b', weights: { A: 2 } },
      { label: 'c', weights: { S: 2, people: 1 } },
    ],
  },
  {
    id: 'q2',
    text: 'Pick another',
    options: [
      { label: 'a', weights: { R: 1, technical: 2 } },
      { label: 'b', weights: { A: 1, technical: -2 } },
      { label: 'c', weights: { E: 2, risk: 1 } },
    ],
  },
];

describe('attainableRange', () => {
  it('computes per-dimension min and max sums across questions', () => {
    const range = attainableRange(questions);
    // R: q1 options give {2,0,0} -> min 0 max 2; q2 gives {1,0,0} -> min 0 max 1
    expect(range.R).toEqual({ min: 0, max: 3 });
    // technical: q1 all 0; q2 gives {2,-2,0} -> min -2 max 2
    expect(range.technical).toEqual({ min: -2, max: 2 });
    // people: q1 {0,0,1}, q2 all 0
    expect(range.people).toEqual({ min: 0, max: 1 });
  });
});

describe('buildUserVector', () => {
  it('normalizes summed weights to [0,1] using the attainable range', () => {
    // Choose q1:a (R+2, I+1), q2:a (R+1, technical+2)
    const vec = buildUserVector(questions, { q1: 0, q2: 0 });
    expect(vec.R).toBeCloseTo(1, 10); // (3-0)/(3-0)
    expect(vec.technical).toBeCloseTo(1, 10); // (2 - -2)/(2 - -2)
    expect(vec.A).toBeCloseTo(0, 10); // min attainable
  });

  it('maps signed weights into [0,1] with the midpoint at neutral', () => {
    // Choose q1:b (A+2), q2:c (E+2, risk+1): technical raw 0 in range [-2,2]
    const vec = buildUserVector(questions, { q1: 1, q2: 2 });
    expect(vec.technical).toBeCloseTo(0.5, 10);
  });

  it('gives 0.5 for dimensions the questionnaire cannot move', () => {
    const flat = [
      { id: 'f1', text: 'x', options: [{ label: 'a', weights: { R: 1 } }] },
    ];
    const vec = buildUserVector(flat, { f1: 0 });
    expect(vec.S).toBe(0.5); // no question touches S
  });

  it('throws if any question is unanswered', () => {
    expect(() => buildUserVector(questions, { q1: 0 })).toThrow(/unanswered/i);
  });
});

describe('cosineSimilarity', () => {
  it('is 1 for identical direction and 0 for orthogonal vectors', () => {
    expect(cosineSimilarity([1, 0], [2, 0])).toBeCloseTo(1, 10);
    expect(cosineSimilarity([1, 0], [0, 1])).toBeCloseTo(0, 10);
  });

  it('matches a hand-computed value', () => {
    // dot = 4+10+18 = 32; |a| = sqrt(14); |b| = sqrt(77)
    expect(cosineSimilarity([1, 2, 3], [4, 5, 6])).toBeCloseTo(
      32 / (Math.sqrt(14) * Math.sqrt(77)),
      10
    );
  });

  it('is 0 when either vector has zero magnitude', () => {
    expect(cosineSimilarity([0, 0], [1, 2])).toBe(0);
  });
});

describe('profileSimilarity', () => {
  it('is 1 for identical profiles and -1 for inverted profiles', () => {
    const u = { R: 0.9, I: 0.8, A: 0.2, S: 0.1 };
    const inverted = { R: 0.1, I: 0.2, A: 0.8, S: 0.9 };
    expect(profileSimilarity(u, u)).toBeCloseTo(1, 10);
    expect(profileSimilarity(u, inverted)).toBeCloseTo(-1, 10);
  });

  it('is 0 for a flat profile (no shape to correlate)', () => {
    const flat = { R: 0.5, I: 0.5, A: 0.5, S: 0.5 };
    const u = { R: 0.9, I: 0.1, A: 0.4, S: 0.6 };
    expect(profileSimilarity(flat, u)).toBe(0);
  });
});

describe('rankCareers', () => {
  const user = { R: 0.9, I: 0.8, A: 0.2, S: 0.1 };
  const careers = [
    { id: 'artist', name: 'Artist', vector: { R: 0.1, I: 0.2, A: 0.95, S: 0.5 } },
    { id: 'engineer', name: 'Engineer', vector: { R: 0.9, I: 0.8, A: 0.2, S: 0.1 } },
    { id: 'teacher', name: 'Teacher', vector: { R: 0.3, I: 0.5, A: 0.4, S: 0.9 } },
  ];

  it('ranks careers by descending similarity', () => {
    const ranked = rankCareers(user, careers);
    expect(ranked.map((r) => r.career.id)).toEqual([
      'engineer',
      expect.any(String),
      expect.any(String),
    ]);
    expect(ranked[0].similarity).toBeGreaterThanOrEqual(ranked[1].similarity);
    expect(ranked[1].similarity).toBeGreaterThanOrEqual(ranked[2].similarity);
  });

  it('gives an identical profile a 100% match and keeps scores in [0,100]', () => {
    const ranked = rankCareers(user, careers);
    expect(ranked[0].matchPct).toBe(100);
    for (const r of ranked) {
      expect(r.matchPct).toBeGreaterThanOrEqual(0);
      expect(r.matchPct).toBeLessThanOrEqual(100);
    }
  });
});

describe('topDrivers', () => {
  it('returns dimensions where user strength aligns with career demand', () => {
    const user = { R: 0.9, I: 0.8, A: 0.2, S: 0.1, E: 0.5 };
    const career = { R: 0.95, I: 0.7, A: 0.1, S: 0.2, E: 0.5 };
    const drivers = topDrivers(user, career, 2);
    expect(drivers).toEqual(['R', 'I']);
  });

  it('excludes dimensions where the user is below their own average', () => {
    const user = { R: 0.9, I: 0.2, A: 0.2, S: 0.2 };
    const career = { R: 0.1, I: 0.2, A: 0.2, S: 0.9 };
    const drivers = topDrivers(user, career, 3);
    expect(drivers).not.toContain('S');
    expect(drivers).not.toContain('I');
    expect(drivers).not.toContain('A');
  });
});
