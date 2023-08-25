import React from "react";
import { Heading } from "./Heading";
import { about } from "../../data/data";
import "./About.css";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="Sorghum" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Us" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                {/* <button>Download CV</button>
                <button className="primaryBtn">Download CV</button> */}
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
