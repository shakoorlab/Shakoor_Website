import "../../../App.css";
import React from "react";
import AboutHero from "../../hero/about/AboutHero";
import "../styles/About.css";
import About1 from "../../../assets/images/about/About34.webp";
import About2 from "../../../assets/images/gallery/field/field1.webp";
import About3 from "../../../assets/images/about/about_3.webp";
import SorghumAbout from "./SorghumAbout";

const FullScreenComponent = ({
  title,
  subtitle,
  backgroundImage,
  blurEffect,
  additionalClass,
}) => {
  return (
    <div
      className={`full-screen-container ${
        blurEffect ? "blur-effect" : ""
      } ${additionalClass}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

function About() {
  const sections = [
    {
      title: "Who we are",
      subtitle:
        "Established in 2021, the Shakoor lab at the Donald Danforth Plant Science Center is working hard to create a high-impact research program that integrates and applies data streams from diverse technologies and disciplines towards addressing specific, real-world challenges in sustainable cropping systems.",
      backgroundImage: About3,
      blurEffect: false,
    },
    {
      title: "What We Do",
      subtitle:
        "The lab develops and uses integrated digital agriculture systems to study the effects of phenotype, genotype, and environment on Sorghum crop productivity.",
      backgroundImage: About2,
      blurEffect: true,
    },
    {
      title: "Sorghum for Food and Fuel",
      subtitle:
        "An ideal crop to meet increased global demand with less impact on the environment",
      backgroundImage: About1,
      blurEffect: false,
    },
  ];
  return (
    <>
      <AboutHero />
      <div>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <FullScreenComponent
              title={section.title}
              subtitle={section.subtitle}
              backgroundImage={section.backgroundImage}
              blurEffect={section.blurEffect}
              additionalClass={
                index === 1
                  ? "top-gradient-effect white-text"
                  : index === 2
                  ? "white-top-gradient-effect increased-subtitle-margin"
                  : ""
              }
            />
            {index === 1 && <SorghumAbout />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default About;
