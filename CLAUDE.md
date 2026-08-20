# CLAUDE.md

## Project: Career Discovery

Client-side React app. A 50-item form sampled from a 150-question bank builds a
10-trait profile and ranks 63 careers by Pearson profile correlation. No backend,
no network calls, no localStorage. State is in-memory only, by design.

```bash
npm run dev     # dev server (avoid port 5199, occupied on this machine)
npm test        # 40 Vitest unit + coherence tests
npm run build   # single-file dist/index.html, runs offline
```

- `src/engine/scoring.js` holds the math (normalization, correlation, ranking)
  and `src/engine/form.js` the per-session form sampling; `src/data/` holds
  dimensions, the question bank, and careers.
- Data edits must keep `src/data/data.test.js` green: bank >= 90 questions, each
  category >= 2x its form quota, 4-5 options per question, every option carrying
  a nonzero weight on a known dimension.
- `vite-plugin-singlefile` inlines everything, so system fonts only and no
  external asset URLs.
- UI copy: short and plain, keep the user's wording, no em-dashes. Show a
  standalone preview page before porting a visual change into the app.
- Playwright MCP screenshots land in the repo root; delete them after use.
- Full context is in `Memory.md` and `README.md`. Update `Memory.md` when a
  decision changes.

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Scope and Simplicity

**Minimum code that solves the problem. Touch only what you must.**

- No features, abstractions, or configurability beyond what was asked.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.
- Don't "improve" or refactor adjacent code that isn't broken.
- Remove imports and functions that YOUR changes made unused; leave
  pre-existing dead code alone and mention it instead.

The test: Every changed line should trace directly to the user's request.

## 3. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
