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
            <p>
              Our approach recognises that every child is unique and thrives best when learning is grounded in care, structure, play,
              and positive values.
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

      <section className="programmes-section">
        <h2>Our Learning Programmes</h2>
        <p>
          Tunza Kids Academy offers structured early childhood programmes designed to support children at every foundational stage:
        </p>
        <div className="cards-grid">
          <div className="card">
            <h3>Daycare</h3>
            <p>A safe, caring, and nurturing environment for infants and young children.</p>
          </div>
          <div className="card">
            <h3>Playgroup</h3>
            <p>Learning through play, interaction, and guided discovery.</p>
          </div>
          <div className="card">
            <h3>Pre-Primary 1 (PP1)</h3>
            <p>Building early literacy, numeracy, and social skills.</p>
          </div>
          <div className="card">
            <h3>Pre-Primary 2 (PP2)</h3>
            <p>Preparing children confidently for primary school.</p>
          </div>
        </div>
        <p>
          Each programme is delivered through age-appropriate activities that promote curiosity, discipline, creativity,
          and independence.
        </p>
      </section>

      <section className="philosophy-section">
        <h2>Our Learning Philosophy</h2>
        <p>
          At Tunza Kids Academy, we believe that strong foundations shape strong futures. Our learning philosophy focuses on:
        </p>
        <div className="cards-grid">
          <div className="card">
            <h3>Holistic Child Development</h3>
            <p>Supporting growth across all developmental areas.</p>
          </div>
          <div className="card">
            <h3>Learning Through Play</h3>
            <p>Exploration and guided instruction for natural learning.</p>
          </div>
          <div className="card">
            <h3>Positive Discipline</h3>
            <p>Character formation through respectful guidance.</p>
          </div>
          <div className="card">
            <h3>Partnership</h3>
            <p>School, parents, and caregivers working together.</p>
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
        <p style={{ marginTop: '2rem' }}>
          Children learn best when they feel safe, valued, and loved—and this is at the heart of everything we do.
        </p>
      </section>

      <section className="why-section">
        <h2>Why Choose Tunza Kids Academy</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Nurturing & Disciplined</h3>
            <p>A balanced learning environment with care and structure.</p>
          </div>
          <div className="card">
            <h3>Individual Attention</h3>
            <p>Child-focused care tailored to each learner's needs.</p>
          </div>
          <div className="card">
            <h3>Balanced Development</h3>
            <p>Academic excellence combined with character growth.</p>
          </div>
          <div className="card">
            <h3>Strong Values</h3>
            <p>Character formation grounded in respect and kindness.</p>
          </div>
          <div className="card">
            <h3>Safe Transport</h3>
            <p>Reliable school transportation for peace of mind.</p>
          </div>
        </div>
      </section>

      <section className="admissions-section">
        <h2>Admissions & Enrolment</h2>
        <p>Admissions are ongoing across all programmes.</p>
        <p>📍 Location: 7th Riverview Avenue, Imani Estate, along Ruiru-Githunguri Road</p>
        <p>📞 Contact: 0723 051 405</p>
        <p>
          We warmly invite parents and guardians to visit the school, meet our team, and experience the Tunza Kids Academy environment firsthand.
        </p>
        <div className="promise-box">
          <h3>Our Promise</h3>
          <p>
            At Tunza Kids Academy, we are committed to nurturing young minds and hearts, laying a firm foundation for lifelong learning,
            character, and purpose.
          </p>
        </div>
      </section>
    </main>
  );
}
