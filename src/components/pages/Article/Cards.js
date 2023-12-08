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
            src="images/articles/article_11.webp"
            alt="Sorghum field"
            text="Harnessing the Power of Climate Smart Crops"
            label="January 1, 2023"
            path="https://www.bizjournals.com/stlouis/news/2023/01/01/sorghum-harnessing-the-power-of-climate-smart-crop.html"
          />
          <CardItem
            src="images/articles/article_10.webp"
            alt="Farmer in field"
            text="Sorghum's Revival Goes Against the Grain"
            label="September 30, 2022"
            path="https://www.forbes.com/sites/daphneewingchow/2022/09/30/sorghums-revival-goes-against-the-grain/?sh=1fede1d66f1c"
          />
          <CardItem
            src="images/articles/article_8.webp"
            alt="Photo of Sorghum"
            text="DDPSC Collaborates with Sorghum Producers"
            label="September 28, 2022"
            path="https://www.eurekalert.org/news-releases/966324"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="images/articles/article_7.webp"
            alt="Photo at the NSF"
            text="Receiving the National Science Foundation Grant"
            label="September 15, 2022"
            path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
          />
          <CardItem
            src="images/articles/article_1.webp"
            alt="Image of PheNode in field "
            text="Salk Researchers Launch Collaboration"
            label="September 14, 2021"
            path="https://www.salk.edu/news-release/salk-plant-researchers-launch-collaboration-to-breed-carbon-capturing-sorghum/"
          />
          <CardItem
            src="images/articles/article_6.webp"
            alt="Image of Dr. Shakoor working with PheNode"
            text="You Should Get to Know Dr. Shakoor"
            label="August 5, 2021"
            path="https://www.bizjournals.com/stlouis/inno/stories/profiles/2021/08/05/st-louis-character-2021-nadia-shakoor.html"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="images/articles/article_5.webp"
            alt="Image of phenotyper"
            text="ETHINKSTL: In This Episode for the Week"
            label=" February 10, 2021"
            path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
          />
          <CardItem
            src="images/articles/article_2.webp"
            alt="Image of TerraReff project"
            text="Farming and Drones? How do they work together?"
            label="November 16, 2020"
            path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
          />
          <CardItem
            src="images/articles/article_3.webp"
            alt="Image of PheNode in a field"
            text="Phenotyping Station Ready for Field Testing"
            label="November 4, 2016"
            path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
