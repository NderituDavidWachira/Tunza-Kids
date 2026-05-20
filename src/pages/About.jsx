import Hero from '../components/Hero';
import storyImg from '../assets/gate.jpeg';
import '../styles/About.css';

export default function About() {
  return (
    <main className="about-page">
      <Hero />

      <section className="about-story-section">
        <div className="story-container">
          <div className="story-text">
            <h2>About Tunza Kids Academy</h2>
            <p>
              Tunza Kids Academy is a child-centred early learning institution committed to nurturing the whole child—academically,
              socially, emotionally, physically, and morally. We provide a safe, caring, and stimulating environment where children are
              guided to discover their potential, build confidence, and develop a love for learning from an early age.
            </p>
          </div>
          <img src={storyImg} alt="Early learning classroom" className="story-image" loading="lazy" />
        </div>
      </section>

      <section className="vision-mission-section">
        <div className="vision-mission-container">
          <div className="vision-card">
            <h3>VISION</h3>
            <p>To produce a knowledgeable, morally upright and physically developed child</p>
          </div>
          <div className="mission-card">
            <h3>MISSION</h3>
            <p>Train up an obedient child who fit in the local and global context</p>
          </div>
          <div className="motto-card">
            <h3>MOTTO</h3>
            <p>Nurturing for wholesome growth</p>
          </div>
        </div>
      </section>
      <section className="environment-section">
        <h2>Safe, Supportive & Child-Friendly Environment</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Secure Facilities</h3>
            <p>Child-friendly spaces designed for safety and exploration.</p>
          </div>
          <div className="card">
            <h3>Trained Caregivers</h3>
            <p>Caring and qualified teachers committed to children's wellbeing.</p>
          </div>
          <div className="card">
            <h3>Clean & Stimulating</h3>
            <p>Bright, organized spaces that inspire learning and creativity.</p>
          </div>
          <div className="card">
            <h3>Reliable Transport</h3>
            <p>Safe and dependable school transportation services.</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose Tunza Kids Academy</h2>
        <div className="cards-grid">
           <div className="card">
            <h3>Strong Values</h3>
            <p>Character formation grounded in respect and kindness.</p>
          </div>
          <div className="card">
            <h3>Respect</h3>
            <p>A balanced learning environment with care and structure.</p>
          </div>
          <div className="card">
            <h3>Obedience</h3>
            <p>Child focused care tailored to each learner's needs.</p>
          </div>
        </div>
      </section>

      <section className="admissions-section">
        <div className="promise-box">
          <h3>Our Promise</h3>
          <p>
            At Tunza Kids Academy, we are committed to nurturing children through holistic values that inspire growth in mind, character, creativity, and compassion
          </p>
        </div>
      </section>
    </main>
  );
}
