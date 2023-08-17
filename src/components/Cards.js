import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>In the News</h1>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src="images/smart_crops_article.webp"
            text="Harnessing the Power of Climate Smart Crops"
            label="Your Mom"
            path="/news"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
