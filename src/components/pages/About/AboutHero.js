import React, { useState, useEffect } from "react";
import "./AboutHero.css";
import "../../../App.css";
// import { Button } from "../Button/Button";

function AboutHero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7000); // Set the delay to 10 seconds (10,000 milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer to avoid any potential issues
  }, []); // The empty dependency array ensures the effect only runs once after the component mounts

  return (
    <div className="hero-container">
      <video src="/videos/home.mov" autoPlay loop muted />
      <h1 className={isVisible ? "" : "fade-out"}>About Us</h1>
      <p className={isVisible ? "" : "fade-out"}> Learn more about the lab</p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          fadeClass={isVisible ? "" : "fade-out"}
        >
          Explore
        </Button> */}
      </div>
    </div>
  );
}

export default AboutHero;
