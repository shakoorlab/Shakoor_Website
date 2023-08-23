import React from "react";
import "../../../App.css";
import Cards from "../Article/Cards";
import HeroSection from "../Hero/HeroSection";
import AboutHero from "../About/AboutHero";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutHero />
      <Cards />
    </>
  );
}

export default Home;
