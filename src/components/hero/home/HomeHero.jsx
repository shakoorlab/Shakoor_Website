import { useState } from "react";
import "../../styles/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img4 from "../../../assets/images/home/img4.webp";
import img3 from "../../../assets/images/home/3.webp";
import bee from "../../../assets/images/home/bee.webp";
import fd from "../../../assets/images/home/fd.webp";
import best from "../../../assets/images/gallery/phenotyping/pheno6.webp";
import img6 from "../../../assets/images/home/img6.webp";

function HomeHero() {
  const images = [
    {
      id: 1,
      url: img4,
      name: "Shakoor Lab",
      description: "Breeding innovation, tech, and resilience",
    },
    {
      id: 2,
      url: bee,
      name: "Our Mission",
      description: "Improving the planet through plant science",
    },
    {
      id: 3,
      url: img3,
      name: "Sorghum",
      description: "A tool in the fight against climate change",
    },
    {
      id: 4,
      url: fd,
      name: "FieldDock",
      description: "Accelerating the future of phenotyping",
    },
    {
      id: 5,
      url: best,
      name: "Phenotyping ",
      description: "Analysis using the Bellwether Phenotyper ",
    },
    {
      id: 6,
      url: img6,
      name: "Outreach",
      description: "Sharing science, innovation, and technology ",
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

  const activeImage = images[current];

  return (
    <div className="hero-container">
      <div className="top-section">
        <div className="slide">
          <div key={activeImage.id} className="item active">
            <img
              src={activeImage.url}
              alt={activeImage.name}
              loading="eager"
              decoding="async"
              className="hero-slide-image"
            />
            <div className="content">
              <div className="name">{activeImage.name}</div>
              <div className="des">{activeImage.description}</div>
              {/* <button>See More</button> */}
            </div>
          </div>
        </div>
        <div className="preview-section">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.name}
              loading="lazy"
              decoding="async"
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

export default HomeHero;
