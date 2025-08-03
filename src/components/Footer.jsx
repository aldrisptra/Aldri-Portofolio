import '../styles/Footer.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span>&copy; Portofolio Aldri</span>
        <div className="social-icons">
          <a href="https://instagram.com/aldrisptra" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/aldrisptra" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;