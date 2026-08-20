import { CAREERS } from "../data/careers.js";
import { DIMENSIONS } from "../data/dimensions.js";
import { FORM_QUOTAS } from "../engine/form.js";

// Read off the same sources the exam does, so the copy can never drift from
// what a sitting actually contains.
const FORM_SIZE = Object.values(FORM_QUOTAS).reduce((s, n) => s + n, 0);

export default function Home({ onTakeExam, onViewCareers }) {
  return (
    <main className="home">
      <div className="home-hero">
        <h1>
          Career <em>Discovery</em>
        </h1>
        <p className="home-lede">
          Answer {FORM_SIZE} questions. Your answers are scored on{" "}
          {DIMENSIONS.length} trait dimensions, then{" "}
          <b>correlated against every career in the database</b> — so the match
          is arithmetic you can check, not a guess.
        </p>
      </div>

      <div className="home-options">
        <button className="home-card primary" onClick={onTakeExam}>
          <div className="home-card-top">
            <h2>Take the test</h2>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </div>
          <p>
            About 7 minutes. {FORM_SIZE} items, sampled fresh each sitting.
          </p>
        </button>

        <button className="home-card secondary" onClick={onViewCareers}>
          <div className="home-card-top">
            <h2>Browse career paths</h2>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </div>
          <p>
            All {CAREERS.length} careers and the trait profile behind each one.
          </p>
        </button>
      </div>
    </main>
  );
}
