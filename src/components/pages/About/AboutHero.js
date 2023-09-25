import React, { useState, useEffect } from "react";
import "./AboutHero.css";
import "../../../App.css";
// import { Button } from "../Button/Button";

function AboutHero() {
  //---------------------------logic for h1 and p fading out---------------------------
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7000); // Set the delay to 10 seconds (10,000 milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer to avoid any potential issues
  }, []); // The empty dependency array ensures the effect only runs once after the component mounts
  //---------------------------logic for h1 and p fading out---------------------------

  return (
    <div className="about-hero-container">
      {/* <img
        src="/images/about_us/about.webp"
        alt="About"
        className="about-image"
      /> */}

      <h1 className={isVisible ? "" : "fade-out"}>About Us</h1>
      <p className={isVisible ? "" : "fade-out"}> Learn more about the lab</p>
    </div>
  );
}

export default AboutHero;
