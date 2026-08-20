import { CAREERS } from "../data/careers.js";

export default function Home({ onTakeExam, onViewCareers }) {
  return (
    <main className="welcome home">
      <p className="welcome-eyebrow">A statistical career instrument</p>
      <h1>
        Career <em>Discovery</em>
      </h1>
      <p className="welcome-lede">
        Learn more about different career paths, or take a short test that
        matches your characteristics against every one of them with statistics.
      </p>
      <div className="home-options">
        <button className="home-card" onClick={onTakeExam}>
          <h2>Take the Test! </h2>
          <p>About 7 minutes; nothing is saved or sent anywhere.</p>
        </button>
        <button className="home-card" onClick={onViewCareers}>
          <h2>View Career Paths</h2>
          <p>
            Browse the full database of careers and the trait profiles behind
            them.
          </p>
        </button>
      </div>
    </main>
  );
}
