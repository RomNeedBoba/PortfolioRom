import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="logo-wrapper">
        <a href="https://github.com/RomNeedBoba" target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="Logo 1" className="footer-logo" />
        </a>
        <a href="/CV.pdf#zoom=190" target="_blank" rel="noopener noreferrer">
          <img src="./resume.png" alt="Logo 2" className="footer-logo" />
        </a>
        <a href="https://www.linkedin.com/in/rin-pichphyrom/" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.png" alt="Logo 3" className="footer-logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
