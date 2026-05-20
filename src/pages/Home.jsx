import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import storyImg from '../assets/gate.jpeg';
import heroVideo from '../assets/7.mp4';

/* ─── data ─────────────────────────────────────────────────── */
const programs = [
  {
    title: 'Daycare',
    age: 'From 1 year old',
    summary: 'Discovery through play, language and social development.',
   
  },
  {
    title: 'Playgroup',
    age: 'Age 3',
    summary: 'Discovery through play, language and social development.',
   
  },
  {
    title: 'Pre-Primary 1',
    age: 'Age 4 - 5',
    summary: 'Early literacy, numeracy and confidence-building lessons.',
    
  },
  {
    title: 'Pre-Primary 2',
    age: 'Age 5 - 6',
    summary: 'School readiness and strong foundational learning skills.',
    
  },
];

const facts = [
  { label: 'Safe Spaces',       body: 'Clean classrooms, secure grounds, and attentive staff around the clock.'},
  { label: 'Warm Relationships', body: 'Strong bonds between teachers, children, and families built daily.'},
  { label: 'Holistic Growth',   body: 'Academic, emotional, physical, and moral development in every lesson.'},
];


function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, style = {}, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function FactCard({ fact, index }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={index * 90}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? '#fff' : 'rgba(255,255,255,0.72)',
          borderRadius: '14px',
          padding: '1.5rem 1.35rem',
          border: `1.5px solid ${hov ? '#3d7a52' : '#c8dfc4'}`,
          transition: 'all 0.26s ease',
          boxShadow: hov ? '0 8px 28px rgba(61,122,82,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1rem', fontWeight: 700,
          color: '#1a2e20', marginBottom: '0.35rem',
        }}>{fact.label}</h3>
        <p style={{ fontSize: '0.83rem', color: '#4a5e4a', lineHeight: 1.65, margin: 0 }}>
          {fact.body}
        </p>
      </div>
    </Reveal>
  );
}

function ProgramCard({ program, index }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={index * 110}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: '#fff',
          border: `1.5px solid ${hov ? program.accent : '#e2dbd2'}`,
          borderRadius: '16px',
          padding: '1.9rem 1.65rem',
          position: 'relative', overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.34, 1.4, 0.64, 1)',
          transform: hov ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: hov ? '0 12px 32px rgba(0,0,0,0.09)' : '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: program.accent,
          opacity: hov ? 1 : 0.3,
          transition: 'opacity 0.28s ease',
          borderRadius: '16px 16px 0 0',
        }} />
        <span style={{
          display: 'block',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '2.6rem', fontWeight: 700,
          color: program.accent, opacity: 0.13,
          lineHeight: 1, marginBottom: '0.35rem', userSelect: 'none',
        }}>{program.num}</span>
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1.18rem', fontWeight: 700,
          color: '#1a1008', margin: '0 0 0.28rem',
        }}>{program.title}</h3>
        <span style={{
          display: 'inline-block', fontSize: '0.69rem', fontWeight: 600,
          letterSpacing: '0.09em', textTransform: 'uppercase',
          color: program.accent, marginBottom: '0.8rem',
        }}>{program.age}</span>
        <p style={{ fontSize: '0.91rem', color: '#5a4a38', lineHeight: 1.7, margin: 0 }}>
          {program.summary}
        </p>
      </div>
    </Reveal>
  );
}

/* ─── main component ────────────────────────────────────────── */
export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollY, setScrollY]         = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Lora:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'DM Sans', sans-serif; background: #f8f5f0; color: #1a1008; }

     
        .tka-hero {
          position: relative;
          height: 87vh;
          min-height: 480px;
          max-height: 680px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .tka-hero-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          transform: translateY(${scrollY * 0.18}px);
          opacity: ${videoLoaded ? 1 : 0};
          transition: opacity 1s ease;
        }
        /* heavy scrim — text must always be white-on-dark */
        .tka-hero-scrim {
          position: absolute; inset: 0;
          background: linear-gradient(
            170deg,
            rgba(5,2,0,0.55) 0%,
            rgba(5,2,0,0.72) 60%,
            rgba(5,2,0,0.91) 100%
          );
        }
        .tka-hero-content {
          position: relative; z-index: 2;
          padding: 0 6vw 3.5rem;
          max-width: 680px;
        }
        .tka-eyebrow {
          display: inline-block;
          font-size: 0.66rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #e8c98a;
          background: rgba(232,201,138,0.1);
          border: 1px solid rgba(232,201,138,0.28);
          padding: 4px 13px; border-radius: 30px;
          margin-bottom: 1rem;
        }
        .tka-hero h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 4.8vw, 3.6rem);
          font-weight: 700; color: #ffffff;
          line-height: 1.1; margin-bottom: 1rem;
        }
        .tka-hero h1 em { font-style: italic; color: #fcd60f; }
        .tka-hero-p {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(0.9rem, 1.3vw, 1.02rem);
          color: rgba(255,255,255,0.92);
          line-height: 1.82; margin-bottom: 1.75rem;
          max-width: 500px;
        }
        .tka-hero-ctas { display: flex; gap: 0.85rem; flex-wrap: wrap; }

        /* scroll indicator */
        .tka-scroll-hint {
          position: absolute; bottom: 1.5rem; right: 5vw; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 7px;
          opacity: 0.45; animation: tka-bounce 2.4s ease-in-out infinite;
        }
        .tka-scroll-hint span {
          font-size: 0.58rem; letter-spacing: 0.16em; text-transform: uppercase;
          color: #fff; writing-mode: vertical-rl;
        }
        .tka-scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom,#fff,transparent); }
        @keyframes tka-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }

        /* ── WELCOME — very light green ── */
        .tka-welcome {
          background: #f0f7f1;
          padding: 5rem 6vw;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 3.5rem; align-items: center;
          border-top: 1px solid #c8dfc4;
        }
        .tka-welcome-label {
          font-size: 0.66rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #3d7a52; margin-bottom: 0.65rem; display: block;
        }
        .tka-welcome h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 2.8vw, 2.4rem);
          font-weight: 700; color: #152a1c;
          line-height: 1.18; margin-bottom: 1rem;
        }
        .tka-welcome-body {
          font-family: 'Lora', Georgia, serif;
          font-size: 0.97rem; color: #3d4f3e;
          line-height: 1.84; margin-bottom: 1.75rem;
        }
        .tka-welcome-ctas { display: flex; gap: 0.9rem; flex-wrap: wrap; }
        .tka-facts-grid { display: grid; grid-template-columns: 1fr; gap: 0.8rem; }

        /* ── FEATURE — pure white ── */
        .tka-feature-section { background: #ffffff; padding: 2.5rem 6vw; }
        .tka-feature-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4.5rem; align-items: center;
        }
        .tka-feature-image-wrap { position: relative;}
        .tka-feature-image-wrap img {
          width: 100%; position:center;  border-radius: 20px; display: block;
          object-fit: cover; aspect-ratio: 5/5;
        }
        .tka-feature-badge {
          position: absolute; bottom: -1.4rem; right: -1.4rem;
          background: #152a1c; border-radius: 14px;
          padding: 1.1rem 1.4rem; text-align: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
        .tka-feature-badge strong {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem; font-weight: 700;
          color: #fcd60f; line-height: 1;
        }
        .tka-feature-badge span {
          font-size: 0.68rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(245,237,224,0.6);
        }

        /* shared label / heading */
        .tka-section-label {
          font-size: 0.66rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #fcd60f; margin-bottom: 0.55rem; display: block;
        }
        .tka-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.65rem, 2.8vw, 2.3rem);
          font-weight: 700; color: #1a1008;
          line-height: 1.2; margin-bottom: 1rem;
        }
        .tka-body-text {
          font-family: 'Lora', Georgia, serif;
          font-size: 0.97rem; color: #5a4a38;
          line-height: 1.84; margin-bottom: 1.65rem; max-width: 510px;
        }
        .tka-feature-list { list-style: none; padding: 0; margin: 0 0 1.8rem; }
        .tka-feature-list li {
          font-family: 'Lora', Georgia, serif;
          font-size: 0.93rem; color: #4a3a28;
          padding: 0.55rem 0; border-bottom: 1px solid #ede5d8;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .tka-feature-list li::before {
          content: ''; width: 5px; height: 5px;
          border-radius: 50%; background: #c97d2e; flex-shrink: 0;
        }

        /* ── PROGRAMS — warm off-white ── */
        .tka-programs-section {
          background: #f5f0e8; padding: 5.5rem 6vw; text-align: center;
          border-top: 1px solid #e4dbd0;
        }
        .tka-programs-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 1.1rem; margin: 2.5rem 0 2rem; text-align: left;
        }

        /* ── VALUES — very light green ── */
        .tka-values {
          background: #f0f7f1;
          padding: 5rem 6vw;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: start;
          border-top: 1px solid #c8dfc4;
        }
        .tka-values-label {
          font-size: 0.66rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #3d7a52; margin-bottom: 0.65rem; display: block;
        }
        .tka-values h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.75rem, 2.8vw, 2.35rem);
          font-weight: 700; color: #152a1c;
          line-height: 1.18; margin-bottom: 1rem;
        }
        .tka-values-body {
          font-family: 'Lora', Georgia, serif;
          font-size: 0.97rem; color: '#4a5e4a'; line-height: 1.84;
          color: #3d4f3e;
        }
        .tka-values-list { list-style: none; padding: 0; margin: 0; }
        .tka-values-list li {
          font-family: 'Lora', Georgia, serif;
          font-size: 0.95rem; color: #2e4030;
          padding: 0.9rem 0; border-bottom: 1px solid #c0d8bc;
          display: flex; align-items: flex-start; gap: 0.9rem; line-height: 1.6;
        }
        .tka-values-list li .vdot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3d7a52; flex-shrink: 0; margin-top: 6px;
        }

        /* ── shared buttons ── */
        .tka-btn-primary {
          background: #3d7a52; color: #fff;
          padding: 0.76rem 1.8rem; border-radius: 50px;
          font-size: 0.86rem; font-weight: 500; letter-spacing: 0.02em;
          text-decoration: none;
          transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
          display: inline-block;
        }
        .tka-btn-primary:hover {
          background: #28af58; transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(201,125,46,0.35);
        }
        .tka-btn-ghost {
          background: transparent; color: #fff;
          padding: 0.74rem 1.8rem; border-radius: 50px;
          font-size: 0.86rem; font-weight: 400;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.5);
          transition: border-color 0.22s, background 0.22s;
          display: inline-block;
        }
        .tka-btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.1); }

        .tka-btn-warm {
          background: #3d7a52; color: #fff;
          padding: 0.74rem 1.7rem; border-radius: 50px;
          font-size: 0.85rem; font-weight: 500;
          text-decoration: none;
          transition: background 0.22s, transform 0.22s;
          display: inline-block;
        }
        .tka-btn-warm:hover { background: #28af58; transform: translateY(-2px); }

        .tka-btn-outline-green {
          background: transparent; color: #2a6040;
          padding: 0.72rem 1.7rem; border-radius: 50px;
          font-size: 0.85rem; font-weight: 400;
          text-decoration: none;
          border: 1.5px solid #7ab890;
          transition: border-color 0.22s, background 0.22s;
          display: inline-block;
        }
        .tka-btn-outline-green:hover { border-color: #3d7a52; background: rgba(61,122,82,0.06); }

        .tka-btn-secondary {
          background: #fff; color: #1a1008;
          padding: 0.72rem 1.7rem; border-radius: 50px;
          font-size: 0.85rem; font-weight: 500;
          text-decoration: none; border: 1.5px solid #c4b09a;
          transition: border-color 0.22s, background 0.22s;
          display: inline-block;
        }
        .tka-btn-secondary:hover { border-color: #1a1008; background: #f8f5f0; }

        /* ── responsive ── */
        @media (max-width: 768px) {
          .tka-welcome   { grid-template-columns: 1fr; gap: 2rem; }
          .tka-facts-grid{ grid-template-columns: 1fr; }
          .tka-feature-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .tka-programs-grid{ grid-template-columns: 1fr; }
          .tka-values    { grid-template-columns: 1fr; gap: 2rem; }
          .tka-feature-badge { bottom: 0.8rem; right: 0.8rem; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="tka-hero">
        <video
          className="tka-hero-video"
          preload="metadata" muted loop autoPlay playsInline
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="tka-hero-scrim" />
        <div className="tka-hero-content">
          <Reveal delay={360}>
            <p className="tka-hero-p">
              At Tunza Kids Academy, we are committed to nurturing 
              children through holistic values that inspire growth 
              in mind, character, creativity, and compassion
            </p>
            <div className="tka-hero-ctas">
              <Link to="/programs" className="tka-btn-primary">View Programs</Link>
              <Link to="/admissions" className="tka-btn-ghost">Start Admission</Link>
            </div>
          </Reveal>
        </div>
        <div className="tka-scroll-hint">
          <span>Scroll</span>
          <div className="tka-scroll-line" />
        </div>
      </section>

      {/* ══ WELCOME — light green ══ */}
      <section className="tka-welcome">
        <Reveal>
          <span className="tka-welcome-label">Welcome</span>
          <h2>A warm place where children truly belong</h2>
          <p className="tka-welcome-body">
            Tunza Kids Academy is a nurturing early learning community where children grow
            with purpose, joy and confidence. We combine play-based learning with strong
            values, safe routines, and caring educators to help every child thrive.
          </p>
          <div className="tka-welcome-ctas">
            <Link to="/programs"    className="tka-btn-warm">View Programs</Link>
            <Link to="/admissions"  className="tka-btn-outline-green">Start Admission</Link>
          </div>
        </Reveal>
        <div className="tka-facts-grid">
          {facts.map((f, i) => <FactCard key={f.label} fact={f} index={i} />)}
        </div>
      </section>

      {/* ══ FEATURE — white ══ */}
      <section className="tka-feature-section">
        <div className="tka-feature-grid">
          <Reveal>
            <div className="tka-feature-image-wrap">
              <img src={storyImg} alt="Children learning at Tunza Kids Academy" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <span className="tka-section-label">Our Approach</span>
            <h2 className="tka-h2">Learning Through Play and Discovery</h2>
            <p className="tka-body-text">
              Our learning spaces are bright, secure, and designed so children can explore,
              investigate, and build confidence every day. We balance guided activities with
              free play, hands-on learning, and character formation.
            </p>
            
            <Link to="/about" className="tka-btn-secondary">Learn More About Us</Link>
          </Reveal>
        </div>
      </section>

      {/* ══ PROGRAMS — warm off-white ══ */}
      <section className="tka-programs-section">
        <Reveal>
          <span className="tka-section-label" style={{ display: 'block', textAlign: 'center' }}>Programs</span>
          <h2 className="tka-h2" style={{ textAlign: 'center', maxWidth: '440px', margin: '0 auto 0.65rem' }}>
            For Every Stage of Early Childhood
          </h2>
          <p style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem',
            color: '#6a5542', maxWidth: '490px', margin: '0 auto', lineHeight: 1.8,
          }}>
            Our carefully designed programs support children as they develop foundational
            skills, confidence and readiness for the next level of learning.
          </p>
        </Reveal>
        <div className="tka-programs-grid">
          {programs.map((p, i) => <ProgramCard key={p.title} program={p} index={i} />)}
        </div>
        <Reveal>
          <Link to="/programs" className="tka-btn-warm">See All Programs</Link>
        </Reveal>
      </section>

      {/* ══ VALUES — light green ══ */}
      <section className="tka-values">
        <Reveal>
          <span className="tka-values-label">Our Philosophy</span>
          <h2>What Makes Us Different</h2>
          <p className="tka-values-body">
            Tunza Kids Academy focuses on respectful guidance, experiential learning,
            and a community partnership with parents. We celebrate every child as a unique
            learner with strengths, curiosity and potential.
          </p>
        </Reveal>
        <Reveal delay={130}>
          <ul className="tka-values-list">
            {[
              'Child-centered learning through play and exploration',
              'Positive discipline and character formation',
              'Qualified teachers with a caring approach',
              'Holistic support for emotional and social development',
            ].map(v => (
              <li key={v}><span className="vdot" />{v}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}