import React from "react";
import TeamItem from "./TeamItem";
import "./Team.css";
import TeamHero from "../../TeamHero/TeamHero";

function Team() {
  return (
    <>
      <TeamHero /> {/* Inserting the TeamHero component here */}
      <div className="cards">
        <h1>Our Team</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Nadia_Shakoor.jpeg"
              alt="Nadia Shakoor"
              text="Nadia Shakoor "
              label="Principal Investigator"
              path="https://www.bizjournals.com/stlouis/news/2023/01/01/sorghum-harnessing-the-power-of-climate-smart-crop.html"
            />
            <TeamItem
              src="images/team_headshots/Jocelyn_Saxton.jpg"
              alt="Jocelyn Saxton"
              text="Jocelyn Saxton"
              label="September 30, 2022"
              path="https://www.forbes.com/sites/daphneewingchow/2022/09/30/sorghums-revival-goes-against-the-grain/?sh=1fede1d66f1c"
            />
            <TeamItem
              src="images/team_headshots/Marie_De.png"
              alt="Marie De Gracia Coquerel"
              text="Marie De Gracia Coquerel"
              label="September 28, 2022"
              path="https://www.eurekalert.org/news-releases/966324"
            />
            <TeamItem
              src="images/team_headshots/Nate_Eck.png"
              alt="Nathaniel Eck"
              text="Nathaniel Eck"
              label="September 15, 2022"
              path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Jake_Stanton.jpg"
              alt="Jaccob Stanton"
              text="Jaccob Stanton"
              label="September 15, 2022"
              path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
            />
            <TeamItem
              src="images/team_headshots/Monica_Alsup.jpeg"
              alt="Monica Alsup "
              text="Monica Alsup"
              label="September 14, 2021"
              path="https://www.salk.edu/news-release/salk-plant-researchers-launch-collaboration-to-breed-carbon-capturing-sorghum/"
            />
            <TeamItem
              src="images/team_headshots/Boubacar_Gano.png"
              alt="Boubacar Gano"
              text="Boubacar Gano"
              label="August 5, 2021"
              path="https://www.bizjournals.com/stlouis/inno/stories/profiles/2021/08/05/st-louis-character-2021-nadia-shakoor.html"
            />
            <TeamItem
              src="images/team_headshots/Nurzaman_Ahmed.png"
              alt="Nurzaman Ahmed"
              text="Nurzaman Ahmed"
              label="September 15, 2022"
              path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Daniele_Azzaro.jpg"
              alt="Daniele Azzaro"
              text="Daniele Azzaro"
              label=" February 10, 2021"
              path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
            />
            <TeamItem
              src="images/team_headshots/Rachel_Lange.png"
              alt="Rachel Lange"
              text="Rachel Lange"
              label="November 16, 2020"
              path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
            />
            <TeamItem
              src="images/team_headshots/Amy_Pfeifer.png"
              alt="Amy Pfeifer"
              text="Amy Pfeifer"
              label="November 4, 2016"
              path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
            />
            <TeamItem
              src="images/team_headshots/Brendan_Eddingfield.png"
              alt="Brendan Eddingfield"
              text="Brendan Eddingfield"
              label="September 15, 2022"
              path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Zander_Hayes.jpg"
              alt="Zander Hayes"
              text="Zander Hayes"
              label=" February 10, 2021"
              path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
            />
            <TeamItem
              src="images/team_headshots/Audrey_Oldani.jpg"
              alt="Audrey Oldani"
              text="Audrey Oldani"
              label="November 16, 2020"
              path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
            />
            <TeamItem
              src="images/team_headshots/Ella_Marks.png"
              alt="Ella Marks"
              text="Ella Marks"
              label="November 4, 2016"
              path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
            />
            <TeamItem
              src="images/team_headshots/Colton_Burris.jpg"
              alt="Colton Burris"
              text="Colton Burris"
              label="September 15, 2022"
              path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Aaron_Fackler.jpg"
              alt="Aaron Fackler"
              text="Aaron Fackler"
              label=" February 10, 2021"
              path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
            />
            <TeamItem
              src="images/team_headshots/"
              alt="Samantha Aarons"
              text="Samantha Aarons"
              label="November 16, 2020"
              path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
            />
            <TeamItem
              src="images/team_headshots/"
              alt="Image of PheNode in a field"
              text="Phenotyping Station Ready for Field Testing"
              label="November 4, 2016"
              path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
            />
            <TeamItem
              src="images/team_headshots/"
              alt="Photo at the NSF"
              text="Receiving the National Science Foundation Grant"
              label="September 15, 2022"
              path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Team;
