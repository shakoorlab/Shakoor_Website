import React from "react";
import "../../../App.css";
import Cards from "../Article/Cards";
import HeroSection from "../Hero/HeroSection";
import AboutHero from "../About/AboutHero";
import SorghumHero from "../SorghumHero/SorghumHero";
import TeamNoHero from "../Team/TeamNoHero";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutHero />
      <Cards />
      <SorghumHero />
      <TeamNoHero />
    </>
  );
}

export default Home;
