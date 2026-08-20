export default function NoResults({ onStart }) {
  return (
    <main className="welcome stub">
      <p className="welcome-eyebrow">Results</p>
      <h1>Nothing to report yet</h1>
      <p className="welcome-lede">
        Once you've taken an assessment yet, your results will appear here. :)
      </p>
      <div className="welcome-actions">
        <button className="btn-primary" onClick={onStart}>
          Take test
        </button>
      </div>
    </main>
  );
}
