import React, { useState } from "react";
import "../../styles/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import team from "../../../assets/images/team/team1.webp";
import team2 from "../../../assets/images/team/team2.webp";
import team3 from "../../../assets/images/team/team3.webp";
import team4 from "../../../assets/images/team/team4.webp";
import team5 from "../../../assets/images/team/team5.webp";
import team6 from "../../../assets/images/team/team6.webp";

function TeamHero() {
  const images = [
    {
      id: 1,
      url: team,
      name: "Meet the Team",
      description: "Driven by a shared vision",
    },
    {
      id: 2,
      url: team2,
      // name: "Our Mission",
      //   description:
      //     "A multicultural and multidisciplinary group of professionals dedicated to advancing plant science.",
    },
    {
      id: 3,
      url: team3,
      // name: "Sorghum",
      // description:
      //   "A versatile and drought-resistant cereal grain vital for food, feed, and biofuel in many regions of the world.",
    },
    {
      id: 4,
      url: team4,
      // name: "FieldDock",
      // description: "Accelerating the future of phenotyping",
    },
    {
      id: 5,
      url: team5,
      // name: "Phenotyping ",
      // description:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      id: 6,
      url: team6,
      // name: "Carbon",
      // description:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eum!",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    const nextIndex = (current + 1) % images.length;
    setCurrent(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (current - 1 + images.length) % images.length;
    setCurrent(prevIndex);
  };

  return (
    <div className="hero-container">
      <div className="top-section">
        <div className="slide">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`item ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="content">
                <div className="name">{image.name}</div>
                <div className="des">{image.description}</div>
                {/* <button>See More</button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="preview-section">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.name}
              className={`preview ${index === current ? "selected" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
      <div className="slide-button">
        <button
          className="prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={nextSlide} aria-label="Next Slide">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default TeamHero;
