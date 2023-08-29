import React, { useRef } from "react";

import "../../../App.css";
import Cards from "../Article/Cards";
import HeroSection from "../Hero/HeroSection";
import QuoteHero from "../Quote1/QuoteHero";
import { Contact } from "../Contact/Contact";
import travel_02 from "../../../assets/travel-02.jpg";
import travel_03 from "../../../assets/travel-03.jpg";
import Slider from "../Slider/Slider";

function Home() {
  const contactRef = useRef(null);

  return (
    <>
      <HeroSection />
      <Slider
        imageSrc={travel_02}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
      <Cards />
      <QuoteHero />
      <Contact />
    </>
  );
}

export default Home;
