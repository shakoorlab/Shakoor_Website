import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({
  imageSrc,
  title,
  subtitle,
  questionOne,
  questionTwo,
  questionThree,
  flipped,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
            <p>{questionOne}</p>
            <br />
            <p>{questionTwo}</p>
            <br />
            <p>{questionThree}</p>
          </div>
          <img src={imageSrc} alt="Travel" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className="slider-background">
      <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Slider;
