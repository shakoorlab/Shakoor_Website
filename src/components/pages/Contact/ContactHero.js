import React, { useState, useEffect } from "react";
import "./ContactHero.css";
import "../../../App.css";
// import { Button } from "../Button/Button";

function ContactHero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Set the delay to 10 seconds (10,000 milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer to avoid any potential issues
  }, []); // The empty dependency array ensures the effect only runs once after the component mounts

  //-------------------------------------------

  return (
    <div className="hero-container">
      <video src="/videos/team_snippet7.mp4" autoPlay loop muted />
      <h1 className={isVisible ? "" : "fade-out"}>Contact Us</h1>
      <p className={isVisible ? "" : "fade-out"}> We want to hear from you</p>
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

export default ContactHero;
