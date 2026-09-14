# Project Memory — Career Discovery App

Living context document for this repo. Skim this first before making
changes; the spec that started everything is `career-app-prompt.md`.

_Last updated: 2026-08-19_

## What this is

A self-contained career-discovery web app. Each sitting administers a
50-item multiple-choice form drawn from a 150-question bank, builds a
10-trait profile from the answers, and ranks 63 built-in careers by
statistical similarity — entirely client-side, no backend, no AI, no
network calls, no localStorage (in-memory state only, by design).

Stack: Vite 7 + React 19 + Recharts, Vitest for tests,
`vite-plugin-singlefile` so `npm run build` emits one offline-capable
`dist/index.html`.

## Commands

```bash
npm run dev     # dev server
npm test        # 40 unit + coherence tests
npm run build   # single-file production build at dist/index.html
```

## Architecture

- `src/engine/scoring.js` — the math: attainable-range normalization,
  cosine similarity, Pearson profile correlation, ranking, trait-driver
  extraction. Formulas documented in comments.
- `src/engine/form.js` — per-session exam assembly: samples 10 questions
  from each of the five categories, randomizes
  question order within category blocks, Fisher–Yates-shuffles each
  question's options. `mulberry32` PRNG makes forms seedable in tests.
- `src/data/dimensions.js` — the 10-dimension trait space: RIASEC
  (R, I, A, S, E, C) + four bipolar axes (people, risk, autonomy, technical).
- `src/data/questions.js` — `QUESTION_BANK`: 100 questions, 4–5 weighted
  options each, conversational wording.
- `src/data/careers.js` — 63 careers, each with a hand-scored 10-dim
  vector (O*NET-informed), description, titles, education path.
- `src/components/` — `Welcome` (booklet cover), `Exam` (scantron answer
  strip = progress bar + back-navigation), `Results` (radar chart, bipolar
  axis meters, ranked matches, full-list toggle, methodology, .txt export).

## Key decisions and why

- **Pearson profile correlation, not raw cosine.** Raw cosine on
  all-positive [0,1] vectors clusters near 1 and barely discriminates.
  Correlation (= cosine of mean-centered vectors) matches profile *shape*.
  Match % maps r ∈ [−1,1] linearly to 0–100.
- **Normalization by attainable range.** User trait = (raw − min) /
  (max − min), where min/max are the extremes the sampled form could
  produce on that trait. Supports signed option weights; a dimension the
  form can't move defaults to neutral 0.5. This makes scores comparable
  across different sampled forms.
- **Weights travel with option objects**, so shuffling options and
  sampling questions required zero engine changes.
- **Trait "drivers"** per match = largest positive contributions to the
  correlation numerator where the user sits above their own mean. Driver
  chips deliberately show no numbers (an absolute score of 37 confused
  the "driven by" framing even when correct relative to the user's mean).
- **Form sampling guarantees measurability**: `buildForm` re-samples
  (bounded) if a draw would leave any dimension immovable.
- **Design language: psychometric instrument** — scantron
  strip, Avenir/Charter/mono system-font trio, scan-paper palette, form
  green `#2e7d6e`, grading-pen red `#c93a2b` reserved for scores. All
  fonts are system fonts to keep the single-file build offline-capable.

## Invariants enforced by tests (keep green when editing data)

- Bank ≥ 90 questions; every category ≥ 2× its form quota; 4–5 options
  per question; every option has ≥ 1 nonzero weight on a known dimension;
  every dimension movable bank-wide and (via 60-seed test) form-wide.
- Careers: ≥ 40, unique ids/names, all 10 dims scored in [0,1],
  non-flat profiles, ≥ 2 example titles, description + education present.
- Coherence: artistic / technical / social answer patterns must surface
  matching careers in the top 8 across 5 seeded random forms.

## History

- **2026-08-19** — Initial build from `career-app-prompt.md`: 36 fixed
  questions, RIASEC+4 framework, 63 careers, correlation matching, radar
  results, single-file build. All spec requirements + nice-to-haves.
- **2026-08-19 (later)** — Per user feedback: options were positionally
  predictable and retakes repetitive. Added 100-question bank with
  per-session sampling (8/7/7/7/7), shuffled option order, randomized
  question order within categories, and rewrote all wording in a
  conversational voice. Tests grew 31 → 40.

## Environment quirks

- Port **5199** on this machine is occupied by an unrelated app
  ("Sound Stage") — pick another port for dev servers.
- Playwright MCP screenshots land in the repo root; delete after use
  (`.playwright-mcp/` is gitignored).
- Work is committed on `main`; PR #1 (`ui-updates`) is merged. Commit only
  when asked.
