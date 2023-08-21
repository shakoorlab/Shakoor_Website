import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Want to inquire about our research?
        </p>
        <p className="footer-subscription-text">You can reach us here.</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Contact</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Research</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Values</Link>
            <Link to="/">Mission</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="https://www.danforthcenter.org/careers/?gclid=Cj0KCQjwrfymBhCTARIsADXTabnqnh5D5OdQUKWDq65rwGw7AWuzKlXLfXD-TbGLckbfVdL-bvZegjMaAiRAEALw_wcB">
              Careers
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Publications</h2>
            <Link to="/">Google Scholar</Link>
            <Link to="/">PubMed</Link>
            <Link to="/">ResearchGate</Link>
            <Link to="/">Base</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://github.com/shakoorlab">Github</Link>
            <Link to="/">LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Shakoor Lab
              <i class="fa-solid fa-seedling" />
            </Link>
          </div>
          <small class="website-rights">Shakoor Lab © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link Github"
              to="https://github.com/shakoorlab"
              target="_blank"
              aria-label="Github"
            >
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
