import { useState } from "react";
import "../styles/Footer.css";
import logo from "../assets/favicontunza.png";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Tunza Kids Academy Logo" />
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Tunza Kids Academy</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "0.3rem" }}>
            Designed by:{" "}
            <a
              href="https://ryantech.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: hovered ? "#fcd60f" : "rgba(255,255,255,0.75)",
                textDecoration: "none",
                borderBottom: hovered ? "1px solid #fcd60f" : "1px solid rgba(255,255,255,0.3)",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Ryantech Solutions LTD
            </a>
          </p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61589229152937" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/tunza-kids-academy" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href="https://www.instagram.com/tunzakidsacademy/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;