import React, { useState } from "react";
import "../../styles/Cards.css";

function GalleryCardItem({ src, alt }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <li className="cards__item" onClick={handleImageClick}>
        <div className="cards__item__link">
          <div className="cards__item__pic-wrap">
            <img src={src} alt={alt} className="cards__item__img" />
          </div>
        </div>
      </li>
      {isExpanded && (
        <div className="overlay" onClick={handleClose}>
          <img src={src} alt={alt} className="expanded__img" />
        </div>
      )}
    </>
  );
}

export default GalleryCardItem;
