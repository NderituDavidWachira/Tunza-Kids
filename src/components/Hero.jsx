import { Link } from "react-router-dom";
import "./Hero.css";
import gate from "../assets/m7.jpeg";
import heroVideo from "../assets/2.mp4";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${gate})`,
  };
  return (
    <section className="hero" style={heroStyle}>
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Learning Begins with Care</h1>
        <p>
          Tunza Kids Academy offers a safe, nurturing environment where children grow
          socially, emotionally, physically, morally, and academically.
        </p>
        <div className="hero-actions">
          <Link to="/programs" className="hero-button">
            Explore Programs
          </Link>
          <Link to="/admissions" className="hero-button hero-button--secondary">
            Admissions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

