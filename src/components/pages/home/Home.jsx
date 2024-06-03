import "../../../App.css";
import React from "react";
import Cards from "../../news/Cards";
import smol_team from "../../../assets/images/slider/img.webp";
import sorghum from "../../../assets/images/slider/sorghum.webp";
import Slider from "../../slider/Slider";
import HomeHero from "../../hero/home/HomeHero";
import Gallery from "../gallery/Gallery";

function Home() {
  return (
    <>
      <HomeHero />
      <Slider
        imageSrc={smol_team}
        title={"More than just scientists."}
        subtitle={
          "A multicultural and multidisciplinary group of professionals dedicated to advancing plant science."
        }
      />
      <Slider
        imageSrc={sorghum}
        title={"More than just a plant."}
        subtitle={
          "Sorghum is a versatile and drought-resistant cereal grain vital for food, feed, and biofuel in many arid and semi-arid regions of the world."
        }
        flipped={true}
      />
      <Cards />
      <Gallery />
    </>
  );
}

export default Home;
