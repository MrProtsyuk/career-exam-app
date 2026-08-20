import { QUESTION_BANK } from "../data/questions.js";
import { CAREERS } from "../data/careers.js";
import { FORM_SIZE } from "../App.jsx";

export default function Welcome({ onStart }) {
  return (
    <main className="welcome">
      <p className="welcome-eyebrow">A statistical career instrument</p>
      <h1>
        Find what career fits who <em>you</em> are.
      </h1>
      <p className="welcome-lede">
        {FORM_SIZE} multiple-choice questions about your interests, values,
        habits, and temperament — scored against {CAREERS.length} careers with
        plain, inspectable math. No AI verdicts, no internet, no account.
      </p>
      <section className="instructions" aria-label="Instructions">
        <h2>Instructions</h2>
        <ol>
          <li>
            Pick the option closest to true, even when none fits perfectly.
          </li>
          <li>Answer for who you are today, not who you hope to become.</li>
          <li>
            The answer sheet at the top tracks progress — select any filled cell
            to revisit and change an item.
          </li>
          <li>
            Every sitting draws a fresh set of questions and shuffles the answer
            order, so a retake never repeats itself.
          </li>
          <li>
            Scoring runs entirely in this page: your answers build a 10-trait
            profile that is correlated against every career in the database.
          </li>
        </ol>
      </section>
      <div className="welcome-actions">
        <button className="btn-primary" onClick={onStart}>
          Start Test
        </button>
        <p className="welcome-note">
          About 7 minutes. Nothing is saved or sent anywhere.
        </p>
      </div>
    </main>
  );
}
