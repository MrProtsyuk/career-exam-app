import { useEffect, useRef, useState } from 'react';
import { CATEGORIES } from '../data/questions.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/** The scantron strip: progress bar, answer record, and back-navigation
    in one control. A cell is reachable if already answered or if it is the
    first unanswered item. */
function AnswerStrip({ questions, answers, currentIndex, onJump }) {
  const firstUnanswered = questions.findIndex((q) => !(q.id in answers));
  const reachable = (i) =>
    questions[i].id in answers || i === firstUnanswered;
  const answeredCount = Object.keys(answers).length;

  return (
    <nav className="strip" aria-label="Answer sheet">
      <div className="strip-row">
        {CATEGORIES.map((cat) => {
          const indices = questions
            .map((q, i) => ({ q, i }))
            .filter(({ q }) => q.category === cat.key);
          return (
            <div className="strip-group" key={cat.key}>
              <span className="strip-group-label">{cat.label}</span>
              <div className="strip-cells">
                {indices.map(({ q, i }) => {
                  const answered = q.id in answers;
                  return (
                    <button
                      key={q.id}
                      className="cell"
                      data-state={
                        i === currentIndex
                          ? 'current'
                          : answered
                            ? 'answered'
                            : 'blank'
                      }
                      data-state-current={i === currentIndex && answered}
                      disabled={!reachable(i)}
                      onClick={() => onJump(i)}
                      aria-label={`Item ${i + 1}${answered ? ', answered' : ''}${
                        i === currentIndex ? ', current' : ''
                      }`}
                      aria-current={i === currentIndex ? 'step' : undefined}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="strip-meta">
        <span>
          {answeredCount} of {questions.length} answered
        </span>
        <span>select a filled cell to revisit</span>
      </div>
    </nav>
  );
}

export default function Exam({ questions, answers, onAnswersChange, onComplete }) {
  const [index, setIndex] = useState(() => {
    const first = questions.findIndex((q) => !(q.id in answers));
    return first === -1 ? 0 : first;
  });
  const advanceTimer = useRef(null);

  const question = questions[index];
  const category = CATEGORIES.find((c) => c.key === question.category);
  const chosen = answers[question.id];
  const allAnswered = questions.every((q) => q.id in answers);
  const isLast = index === questions.length - 1;

  useEffect(() => () => clearTimeout(advanceTimer.current), []);

  const select = (optionIndex) => {
    const wasAnswered = question.id in answers;
    onAnswersChange({ ...answers, [question.id]: optionIndex });
    clearTimeout(advanceTimer.current);
    // Auto-advance only in the normal forward flow; when revising an
    // earlier answer, stay put so the person keeps their bearings.
    if (!wasAnswered && !isLast) {
      advanceTimer.current = setTimeout(() => setIndex(index + 1), 260);
    }
  };

  const goNext = () => {
    clearTimeout(advanceTimer.current);
    if (!isLast) setIndex(index + 1);
  };
  const goBack = () => {
    clearTimeout(advanceTimer.current);
    if (index > 0) setIndex(index - 1);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const letter = LETTERS.indexOf(e.key.toUpperCase());
      const digit = '12345'.indexOf(e.key);
      const pick = letter !== -1 ? letter : digit !== -1 ? digit : -1;
      if (pick !== -1 && pick < question.options.length) {
        e.preventDefault();
        select(pick);
      } else if (e.key === 'ArrowLeft') {
        goBack();
      } else if (e.key === 'ArrowRight' && chosen !== undefined) {
        goNext();
      } else if (e.key === 'Enter' && allAnswered) {
        onComplete();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <>
      <AnswerStrip
        questions={questions}
        answers={answers}
        currentIndex={index}
        onJump={(i) => {
          clearTimeout(advanceTimer.current);
          setIndex(i);
        }}
      />
      <main className="exam">
        <div className="item-head">
          <span className="item-number">
            {String(index + 1).padStart(2, '0')} / {questions.length}
          </span>
          <span className="item-category">{category.label}</span>
        </div>
        <h1 className="item-question">{question.text}</h1>
        <div className="options" role="group" aria-label="Answer options">
          {question.options.map((option, i) => (
            <button
              key={i}
              className="option"
              aria-pressed={chosen === i}
              onClick={() => select(i)}
            >
              <span className="option-bubble">{LETTERS[i]}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
        <div className="exam-nav">
          <button className="btn-ghost" onClick={goBack} disabled={index === 0}>
            ← Back
          </button>
          <span className="key-hint">keys: A–E select · arrows move</span>
          <span className="nav-right">
            {!isLast && (
              <button
                className="btn-ghost"
                onClick={goNext}
                disabled={chosen === undefined}
              >
                Next →
              </button>
            )}
            {allAnswered && (
              <button className="btn-primary" onClick={onComplete}>
                Score my answers
              </button>
            )}
          </span>
        </div>
      </main>
    </>
  );
}
