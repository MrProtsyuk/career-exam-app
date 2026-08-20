export default function CareerPaths({ onHome }) {
  return (
    <main className="welcome stub">
      <p className="welcome-eyebrow">Career paths</p>
      <h1>Coming soon</h1>
      <p className="welcome-lede">
        A browsable index of every career in the database, with the trait
        profiles behind each one. This section is still being built.
      </p>
      <div className="welcome-actions">
        <button className="btn-primary" onClick={onHome}>
          Home
        </button>
      </div>
    </main>
  );
}
