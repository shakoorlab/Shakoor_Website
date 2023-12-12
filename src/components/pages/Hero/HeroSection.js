import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import "../../../App.css";

function HeroSection() {
  //----------------------------------logic for screen determination------------------
  const [isLargerScreen, setIsLargerScreen] = useState(
    window.innerWidth > 1200
  ); // Assuming 768px as the breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  //----------------------------------logic for screen determination------------------

  //
  //
  //
  //
  //
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
    <div className="hero-container">
      {isLargerScreen ? (
        <video src="/videos/background_video.mp4" autoPlay loop muted />
      ) : (
        <img
          src="/images/home/background_image.webp"
          alt="Hero"
          className="hero-image"
        />
      )}
      <h1 className={isVisible ? "" : "fade-out"}>Shakoor Lab</h1>
      <p className={isVisible ? "" : "fade-out"}>
        Breeding innovation, tech, and resilience
      </p>
    </div>
  );
}

export default HeroSection;
