import { useState } from 'react';
import { QUESTION_BANK } from './data/questions.js';
import { CAREERS } from './data/careers.js';
import { buildForm, FORM_QUOTAS } from './engine/form.js';
import Welcome from './components/Welcome.jsx';
import Exam from './components/Exam.jsx';
import Results from './components/Results.jsx';

export const FORM_SIZE = Object.values(FORM_QUOTAS).reduce((s, n) => s + n, 0);

// Screen flow: welcome -> exam -> results. Each session samples a fresh
// form (random questions, shuffled options) from the bank. All state lives
// in memory only — refreshing the page intentionally starts a new session.
export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState({});

  const start = () => {
    setAnswers({});
    setForm(buildForm(QUESTION_BANK));
    setScreen('exam');
  };

  return (
    <>
      <header className="masthead">
        <span>
          <strong>Career Discovery</strong> · Form CD-{FORM_SIZE}
        </span>
        <span>
          {CAREERS.length} careers · scored on-device
        </span>
      </header>
      {screen === 'welcome' && <Welcome onStart={start} />}
      {screen === 'exam' && (
        <Exam
          questions={form}
          answers={answers}
          onAnswersChange={setAnswers}
          onComplete={() => setScreen('results')}
        />
      )}
      {screen === 'results' && (
        <Results
          questions={form}
          careers={CAREERS}
          answers={answers}
          onRetake={() => {
            setAnswers({});
            setForm(null);
            setScreen('welcome');
          }}
        />
      )}
    </>
  );
}
