import React from 'react'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <section className="footer-divs">
        <div className="footer-div">
            <a href="/ToddPBridgesResume.pdf"
              target="_blank"
              rel="noopender noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3>Resume</h3>
              <p>View my Resume!</p>
            </a>
        </div>
        <div className="footer-div">
            <h3>Todd P Bridges</h3>
            <p>Copyright &copy; 2025</p>
        </div>
        <div className="footer-div">
          <a href="https://tpbridges.infprojects.fhsu.edu/final/about.html"
              target="_blank"
              rel="noopender noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
            <h3>HTML project</h3>
            <p>FHSU intro to web dev project</p>
          </a>
        </div>

    </section>
  )
}

export default Footer;