
import "../styles/Footer.css";
import logo from "../assets/lg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Tunza Kids Academy Logo" />
        </div>
        <div className="footer-info">
          <p>7th Riverview Avenue, Imani Estate, Ruiru-Githunguri Road</p>
          <p><a href="tel:0723051405">0723 051 405</a> | tunzakidsacademy@gmail.com</p>
          <p>&copy; {new Date().getFullYear()} Tunza Kids Academy</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com/tunzakidsacademy" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/tunzakids" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/tunzakidsacademy" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com/tunzakids" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
