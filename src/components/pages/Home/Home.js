import React, { useRef } from "react";

import "../../../App.css";
import Cards from "../Article/Cards";
import HeroSection from "../Hero/HeroSection";
import QuoteHero from "../Quote1/QuoteHero";
import { Contact } from "../Contact/Contact";
import smol_team from "../../../assets/img.jpg";
import sorghum from "../../../assets/sorghum.jpg";
import Slider from "../Slider/Slider";

function Home() {
  const contactRef = useRef(null);

  return (
    <>
      <HeroSection />
      <Slider
        imageSrc={smol_team}
        title={"More than just scientist."}
        subtitle={
          "A multicultural and multidisciplinary group of professionals dedicated to advancing plant science "
        }
      />
      <Slider
        imageSrc={sorghum}
        title={"More than just a plant."}
        subtitle={
          "Sorghum is a versatile and drought-resistant cereal grain vital for food, fodder, and biofuel in many arid and semi-arid regions of the world.."
        }
        flipped={true}
      />
      <Cards />
      <QuoteHero />
      <Contact />
    </>
  );
}

export default Home;
