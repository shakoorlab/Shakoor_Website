import React from "react";
import "../../../App.css";
import Cards from "../Article/Cards";
import HeroSection from "../Hero/HeroSection";
import QuoteHero from "../Quote1/QuoteHero";
import SorghumHero from "../SorghumHero/SorghumHero";
import TeamNoHero from "../Team/TeamNoHero";

function Home() {
  return (
    <>
      <HeroSection />
      <QuoteHero />
      <Cards />
      <SorghumHero />
      <TeamNoHero />
    </>
  );
}

export default Home;
