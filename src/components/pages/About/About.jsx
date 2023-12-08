import React from "react";
import "./About.css";
import AboutHero from "./AboutHero";
import plants from "../../../assets/img2.webp";
import far from "../../../assets/img3.webp";
import close from "../../../assets/img4.webp";
import Slider from "../Slider/Slider";

export const About = () => {
  return (
    <>
      <AboutHero />
      <Slider
        imageSrc={plants}
        title={"Who we are."}
        subtitle={
          "Established in 2021, the Shakoor lab at the Donald Danforth Plant Science Center is working hard to create a high-impact research program that integrates and applies data streams from diverse technologies and disciplines towards addressing specific, real-world challenges in sustainable cropping systems."
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
        title={"Our Collaborators."}
        subtitle={
          "In a collaboration with the Salk Institute of Biological Studies, advanced tools, methods, and technologies are employed to study and enhance the ability of Sorghum bicolor to capture and store carbon dioxide in its roots, shoots, and leaves."
        }
      />
    </>
  );
};
