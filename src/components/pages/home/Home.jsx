import "../../../App.css";
import React, { Suspense, lazy } from "react";
import smol_team from "../../../assets/images/slider/img.webp";
import sorghum from "../../../assets/images/slider/sorghum.webp";
import Slider from "../../slider/Slider";
import HomeHero from "../../hero/home/HomeHero";
import sliderBackground from "../../../assets/images/gallery/greenhouse/gh3.webp";

const Cards = lazy(() => import("../../news/Cards"));
const Gallery = lazy(() => import("../gallery/Gallery"));

function Home() {
  return (
    <>
      <HomeHero />
      <div className="slider-section">
        <img
          src={sliderBackground}
          alt=""
          className="slider-section__background"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
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
      </div>
      <Suspense fallback={null}>
        <Cards />
      </Suspense>
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
    </>
  );
}

export default Home;
