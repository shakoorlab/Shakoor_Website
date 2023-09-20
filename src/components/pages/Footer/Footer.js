import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  // --------------------------------------------------- logic for button -----------------------
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // This will navigate to the Contact page
    window.scrollTo(0, 0);
  };
  // --------------------------------------------------- logic for button -----------------------

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Want to inquire about our research?
        </p>
        <p className="footer-subscription-text">You can reach us here.</p>
        <div className="input-areas">
          <form>
            <Button
              buttonStyle="btn--outline"
              onClick={handleContactClick}
              type="submit"
            >
              Contact
            </Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Research</Link>
            <Link to="/">Projects</Link>
            <Link to="https://www.danforthcenter.org/news/building-our-culture/#:~:text=Establishment%20of%20Center%20Core%20Values,how%20we%20do%20our%20work.">
              Values
            </Link>
            <Link to="https://www.danforthcenter.org/about-us/mission/#:~:text=We%20seek%20to%20feed%20the,world%20center%20for%20plant%20science.&text=The%20Center%20community%20is%20a%20team%20of%20teams.">
              Mission
            </Link>
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
            <Link to="https://scholar.google.com/citations?user=xhSGNg4AAAAJ&hl=en">
              Google Scholar
            </Link>
            <Link to="https://pubmed.ncbi.nlm.nih.gov/">PubMed</Link>
            <Link to="https://www.researchgate.net/">ResearchGate</Link>
            <Link to="https://www.base-search.net/">Base</Link>
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
