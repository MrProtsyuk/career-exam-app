# Career Discovery App — Build Specification

Build a self-contained web app that helps me figure out which career best fits me. The app should administer a multiple-choice questionnaire covering my academic interests, life interests, hobbies, and personality, then match my answers to a set of candidate careers using **pure statistical analysis** — not a generated LLM answer.

**Critical constraint:** Do not call any external API to produce the final result. All matching logic must run entirely client-side, using deterministic math (weighted scoring + vector similarity) against a dataset you build directly into the app.

## 1. Question set
- ~30–40 multiple-choice questions, grouped into:
  - Academic interests (subjects/disciplines I gravitate toward)
  - Life interests / values (stability, impact, creativity, income, autonomy, etc.)
  - Hobbies & activities
  - Personality (Big Five style: openness, conscientiousness, extraversion, agreeableness, neuroticism)
  - Work style preferences (structured vs. unstructured, solo vs. team, hands-on vs. conceptual, risk tolerance)
- 4–5 answer options per question.
- One question at a time, progress bar, and the ability to go back and change an earlier answer.

## 2. Trait framework
- Use the RIASEC model (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) as the backbone, plus a few supplementary axes — people- vs. things-orientation, risk tolerance, autonomy preference, technical vs. creative.
- Every answer option gets pre-assigned weights against one or more trait dimensions (e.g., "building a robot" → +2 Realistic, +1 Investigative).
- After all questions are answered, sum and normalize the weighted contributions into a single user trait vector.

## 3. Career database
- Hard-code at least 40–60 careers, each with:
  - Name, short description
  - A trait vector scored on the same dimensions as the user
  - Example job titles / typical education path
- No external lookups — this lives in the app as a JSON object.

## 4. Matching algorithm (must be genuinely statistical, not hand-wavy)
- Normalize the user's trait vector and each career's trait vector.
- Compute similarity between the user vector and every career vector using cosine similarity (or another explicit, named distance/similarity metric — show the math in code comments).
- Rank careers by similarity, convert to a 0–100% "match" score.
- Return the top 5–8 matches, with the full ranked list available on request.

## 5. Results screen
- Show my trait profile as a radar/spider chart.
- For each top match: name, match %, a short explanation of *which traits drove the score*, and typical education/path.
- Let me expand to see the full ranked list, not just the top few.

## 6. Technical constraints
- Single self-contained React app (or plain HTML/JS if that's your default) — no backend, no external API calls for the matching logic.
- In-memory state only (no localStorage).
- A charting library is fine if available (e.g., Recharts).
- Clean, modern UI — avoid a generic/template look.

## 7. Nice-to-haves (only if they don't compromise anything above)
- Export/download my results.
- A short "how this works" section explaining the methodology in plain language.
