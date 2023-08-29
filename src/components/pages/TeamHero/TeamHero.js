import React, { useState, useEffect } from "react";
import "./TeamHero.css";
import "../../../App.css";
import { Button } from "../Button/Button";

function TeamHero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Set the delay to 10 seconds (10,000 milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer to avoid any potential issues
  }, []); // The empty dependency array ensures the effect only runs once after the component mounts

  //-------------------------------------------
  const [videoSrc, setVideoSrc] = useState("/videos/team1.mov");

  const handleVideoEnd = () => {
    if (videoSrc === "/videos/team1.mov") {
      setVideoSrc("/videos/team2.mp4");
    } else {
      setVideoSrc("/videos/team1.mov"); // if you want to loop between the two videos
    }
  };

  return (
    <div className="hero-container">
      <video src={videoSrc} autoPlay loop muted onEnded={handleVideoEnd} />
      <h1 className={isVisible ? "" : "fade-out"}>Meet the Team</h1>
      <p className={isVisible ? "" : "fade-out"}>
        {" "}
        Scientist who like cats more than people
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          fadeClass={isVisible ? "" : "fade-out"}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default TeamHero;
