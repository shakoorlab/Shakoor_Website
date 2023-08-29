import React from "react";
import "./About.css";
import AboutHero from "./AboutHero";
import plants from "../../../assets/img2.jpg";
import far from "../../../assets/img3.jpg";
import close from "../../../assets/img4.jpg";
import Slider from "../Slider/Slider";

export const About = () => {
  return (
    <>
      <AboutHero />
      <Slider
        imageSrc={plants}
        title={"Who we are."}
        subtitle={
          "Established in 2021, the Shakoor lab at the Donald Danforth Plant Science Center is focused on creating a high-impact research program that addresses challenges in sustainable cropping systems through the integration and application of diverse data streams."
        }
      />
      <Slider
        imageSrc={far}
        title={"What we do."}
        subtitle={
          "The lab develops and uses integrated digital agriculture systems to study the effects of phenotype, genotype, and environment on crop productivity."
        }
        flipped={true}
      />
      <Slider
        imageSrc={close}
        title={"Who we're partnered with."}
        subtitle={
          "In a collaboration with the Salk Institute of Biological Studies, advanced tools, methods, and technologies are employed to study and enhance the ability of Sorghum bicolor to capture and store carbon dioxide in its roots, shoots, and leaves."
        }
      />
      {/* <Slider
        imageSrc={close}
        title={"2."}
        subtitle={
          "Sorghum is a versatile and drought-resistant cereal grain vital for food, fodder, and biofuel in many arid and semi-arid regions of the world.."
        }
        flipped={true}
      /> */}
    </>
  );
};
