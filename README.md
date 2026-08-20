# Career Discovery — Form CD-36

A self-contained web app that helps you figure out which career fits you.
Each sitting administers a 36-item multiple-choice form — drawn fresh from
a 100-question bank (academic interests, values, hobbies, personality,
work style) with answer options shuffled per question — and matches your
answers against 63 built-in careers using deterministic statistics — no
LLM, no backend, no network calls.

## Run it

```bash
npm install
npm run dev        # development server
npm test           # 40 unit + coherence tests (Vitest)
npm run build      # produces dist/index.html — a single self-contained file
```

The production build inlines everything into one `dist/index.html`; you can
double-click it and take the assessment fully offline.

## How the matching works

0. Each session, [src/engine/form.js](src/engine/form.js) samples a form
   from the bank (8 academic + 7 from each other category), randomizes
   question order within categories, and shuffles each question's options —
   weights travel with their options, so scoring is unaffected. A bounded
   re-sample guarantees every trait dimension stays measurable.
1. Every answer option carries pre-assigned signed weights on 10 trait
   dimensions: the six RIASEC types (Realistic, Investigative, Artistic,
   Social, Enterprising, Conventional) plus four axes — people-orientation,
   risk tolerance, autonomy, and technical-vs-creative leaning.
2. Chosen weights are summed per dimension and normalized by the
   questionnaire's attainable min/max on that dimension, giving a user
   trait vector in [0, 1]¹⁰ ([src/engine/scoring.js](src/engine/scoring.js)).
3. Each career in [src/data/careers.js](src/data/careers.js) carries a
   hand-scored profile on the same 10 dimensions, informed by O*NET-style
   occupational interest codes.
4. User and career profiles are compared with **Pearson profile
   correlation** — cosine similarity of the mean-centered vectors — which
   rewards agreement in profile *shape*. The correlation r ∈ [−1, 1] maps
   linearly to the 0–100% match score.

State is in-memory only; refreshing the page starts a fresh session.

## Structure

- `src/engine/scoring.js` — normalization, similarity, ranking, driver
  extraction (fully unit-tested)
- `src/engine/form.js` — per-session form sampling + option shuffling
- `src/data/dimensions.js` — the 10-dimension trait space
- `src/data/questions.js` — 100-question bank, 4–5 weighted options each
- `src/data/careers.js` — 63 careers with trait vectors
- `src/components/` — Welcome, Exam (with the scantron answer strip),
  Results (radar chart, ranked matches, methodology, report export)
