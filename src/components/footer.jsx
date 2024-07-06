import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer to="footer" className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h2>Let's create something amazing together! <br />Get in touch with me.</h2>
        </div>
        <div className="footer-contact">
          <p><i className="fas fa-map-marker-alt"></i> No.06, Mosque Rd, Dehiwala, Mount Lavinia</p>
          <p><i className="fas fa-envelope"></i> ahamedshakeeb123@gmail.com</p>
          <p><i className="fas fa-phone-alt"></i> +94 074 085 2585</p>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/shjasim/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/shakeeb2001" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/shjasim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://wa.me/940740852585" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="footer-rights">&copy; 2024 Shakeeb Jasim. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
