export default function Home({ onTakeExam, onViewCareers }) {
  return (
    <main className="home">
      <div className="home-hero">
        <h1>
          Career <em>Discovery</em>
        </h1>
        <p className="home-lede">
          Browse the career paths on your own, or take a short test that
          measures your traits and ranks every career by how well it fits.
        </p>
      </div>

      <div className="home-options">
        <button className="home-card primary" onClick={onTakeExam}>
          <div className="home-card-top">
            <h2>Take the Test!</h2>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </div>
          <p>About 7 minutes; nothing is saved or sent anywhere.</p>
        </button>

        <button className="home-card secondary" onClick={onViewCareers}>
          <div className="home-card-top">
            <h2>View Career Paths</h2>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </div>
          <p>
            Browse the full database of careers and the trait profiles behind
            them.
          </p>
        </button>
      </div>
    </main>
  );
}
