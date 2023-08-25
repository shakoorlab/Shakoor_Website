import React from "react";
import "./QuoteHero.css";
import "../../../App.css";

function QuoteHero() {
  return (
    <div className="about-hero-container">
      <img src="/images/quote1/background.jpg" alt="Bee pollinating sorghum" />
      <div className="about-text-container">
        {/* <h1>Improving the Planet</h1> */}
        {/* Maybe a quote that says "The crop of the future" */}
        <p data-aos="fade-left">
          “Sorghum is an incredible plant that holds great promise as a
          carbon-sequestering crop. We believe sorghum can be optimized to
          potentially capture and store more carbon and, combined with its
          inherent traits such as drought tolerance, make a positive
          contribution to both food security resiliency and the mitigation of
          negative climate impact"
        </p>
        <p data-aos="fade-left">-Dr. Nadia Shakoor</p>
      </div>
    </div>
  );
}

export default QuoteHero;
