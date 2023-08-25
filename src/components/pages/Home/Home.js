import React from "react";
import "../../../App.css";
import Cards from "../Article/Cards";
import HeroSection from "../Hero/HeroSection";
import QuoteHero from "../Quote1/QuoteHero";
import SorghumHero from "../SorghumHero/SorghumHero";
import TeamNoHero from "../Team/TeamNoHero";
import { Contact } from "../Contact/Contact";
// import { About } from "../About/About";

function Home() {
  return (
    <>
      <HeroSection />
      <QuoteHero />
      {/* <About /> */}
      <Cards />
      <SorghumHero />
      <TeamNoHero />
      <Contact />
    </>
  );
}

export default Home;
