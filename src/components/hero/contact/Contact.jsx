import React, { useState } from "react";
import "../../styles/Hero.css";
import about from "../../../assets/images/about/about_hero.webp";

const EmailButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:shakoorlab@gmail.com";
  };

  return (
    <button
      onClick={handleClick}
      style={{
        borderRadius: "10px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "20px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        marginTop: "10px",
        border: "0.1px solid black",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#17B169")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
    >
      Contact
    </button>
  );
};

function ContactHero() {
  const images = [
    {
      id: 1,
      url: about,
      name: "Contact Us",
    },
  ];

  const [current, setCurrent] = useState(0);

  //   const nextSlide = () => {
  //     const nextIndex = (current + 1) % images.length;
  //     setCurrent(nextIndex);
  //   };

  //   const prevSlide = () => {
  //     const prevIndex = (current - 1 + images.length) % images.length;
  //     setCurrent(prevIndex);
  //   };

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
                <EmailButton />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="preview-section">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.name}
              className={`preview ${index === current ? "selected" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default ContactHero;
