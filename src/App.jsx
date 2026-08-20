import { useState } from "react";
import { QUESTION_BANK } from "./data/questions.js";
import { CAREERS } from "./data/careers.js";
import { buildForm, FORM_QUOTAS } from "./engine/form.js";
import Home from "./components/Home.jsx";
import TestHome from "./components/TestHome.jsx";
import CareerPaths from "./components/CareerPaths.jsx";
import Exam from "./components/Exam.jsx";
import Results from "./components/Results.jsx";
import NoResults from "./components/NoResults.jsx";

export const FORM_SIZE = Object.values(FORM_QUOTAS).reduce((s, n) => s + n, 0);

// Screen flow: home -> (test-home -> exam -> results | careers). Each session
// samples a fresh form (random questions, shuffled options) from the bank.
// All state lives in memory only — refreshing the page intentionally starts
// a new session.
export default function App() {
  const [screen, setScreen] = useState("home");
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const start = () => {
    setAnswers({});
    setForm(buildForm(QUESTION_BANK));
    setCompleted(false);
    setScreen("exam");
  };

  return (
    <>
      <header className="masthead">
        <button className="masthead-home" onClick={() => setScreen("home")}>
          <strong>Career Discovery</strong>
        </button>
        <button className="masthead-tab" onClick={() => setScreen("results")}>
          View my results
        </button>
      </header>
      {screen === "home" && (
        <Home
          onTakeExam={() => setScreen("welcome")}
          onViewCareers={() => setScreen("careers")}
        />
      )}
      {screen === "careers" && <CareerPaths onHome={() => setScreen("home")} />}
      {screen === "welcome" && <TestHome onStart={start} />}
      {screen === "exam" && (
        <Exam
          questions={form}
          answers={answers}
          onAnswersChange={setAnswers}
          onComplete={() => {
            setCompleted(true);
            setScreen("results");
          }}
        />
      )}
      {screen === "results" &&
        (completed ? (
          <Results
            questions={form}
            careers={CAREERS}
            answers={answers}
            onRetake={() => {
              setAnswers({});
              setForm(null);
              setCompleted(false);
              setScreen("welcome");
            }}
          />
        ) : (
          <NoResults onStart={() => setScreen("welcome")} />
        ))}
    </>
  );
}
