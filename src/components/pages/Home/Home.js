import "../../../App.css";
import Cards from "../Article/Cards";
import HeroSection from "../Hero/HeroSection";
import QuoteHero from "../Quote1/QuoteHero";
import smol_team from "../../../assets/img.webp";
import sorghum from "../../../assets/sorghum.webp";
import Slider from "../Slider/Slider";
import React from "react";

function Home() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
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
      {/* Conditionally render the QuoteHero component */}
      <QuoteHero />
    </>
  );
}

export default Home;
