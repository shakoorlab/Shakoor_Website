import React, { useState, useEffect } from "react";
import "./TeamHero.css";
import "../../../App.css";

function TeamHero() {
  //---------------------------logic for h1 and p fading out---------------------------

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Set the delay to 10 seconds (10,000 milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer to avoid any potential issues
  }, []); // The empty dependency array ensures the effect only runs once after the component mounts

  //---------------------------logic for h1 and p fading out---------------------------

  return (
    <div className="team-hero-container">
      <img src="/images/team/team3.webp" alt="Team" className="team-image" />
      <h1 className={isVisible ? "" : "team-fade-out"}>Meet the Team</h1>
      <p className={isVisible ? "" : "team-fade-out"}>
        {" "}
        Driven by a shared vision
      </p>
    </div>
  );
}

export default TeamHero;
