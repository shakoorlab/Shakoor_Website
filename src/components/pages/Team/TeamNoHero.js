import React from "react";
import TeamItem from "./TeamItem";
import "./Team.css";
// import TeamHero from "../TeamHero/TeamHero";

function TeamNoHero() {
  return (
    <div className="cards">
      <h1>Our Team</h1>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <TeamItem
            src="images/team_headshots/Nadia_Shakoor.webp"
            alt="Nadia Shakoor"
            text="Nadia Shakoor "
            label="Principal Investigator"
            path="https://www.bizjournals.com/stlouis/news/2023/01/01/sorghum-harnessing-the-power-of-climate-smart-crop.html"
          />
          <TeamItem
            src="images/team_headshots/Jocelyn_Saxton.webp"
            alt="Jocelyn Saxton"
            text="Jocelyn Saxton"
            label="Research Associate"
            path="https://www.forbes.com/sites/daphneewingchow/2022/09/30/sorghums-revival-goes-against-the-grain/?sh=1fede1d66f1c"
          />
          <TeamItem
            src="images/team_headshots/Marie_De.webp"
            alt="Marie De Gracia Coquerel"
            text="Marie De Gracia Coquerel"
            label="Research Associate"
            path="https://www.eurekalert.org/news-releases/966324"
          />
          <TeamItem
            src="images/team_headshots/Nate_Eck.webp"
            alt="Nathaniel Eck"
            text="Nathaniel Eck"
            label="Data Scientist 1"
            path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
          />
        </ul>
        <ul className="cards__items">
          <TeamItem
            src="images/team_headshots/Jake_Stanton.webp"
            alt="Jaccob Stanton"
            text="Jaccob Stanton"
            label="Data Science Associate"
            path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
          />
          <TeamItem
            src="images/team_headshots/Monica_Alsup.webp"
            alt="Monica Alsup "
            text="Monica Alsup"
            label="Administrative Assistant"
            path="https://www.salk.edu/news-release/salk-plant-researchers-launch-collaboration-to-breed-carbon-capturing-sorghum/"
          />
          <TeamItem
            src="images/team_headshots/Boubacar_Gano.webp"
            alt="Boubacar Gano"
            text="Boubacar Gano"
            label="Postdoctoral Associate"
            path="https://www.bizjournals.com/stlouis/inno/stories/profiles/2021/08/05/st-louis-character-2021-nadia-shakoor.html"
          />
          <TeamItem
            src="images/team_headshots/Nurzaman_Ahmed.webp"
            alt="Nurzaman Ahmed"
            text="Nurzaman Ahmed"
            label="Engineering Research Scientist"
            path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
          />
        </ul>
        <ul className="cards__items">
          <TeamItem
            src="images/team_headshots/Daniele_Azzaro.webp"
            alt="Daniele Azzaro"
            text="Daniele Azzaro"
            label="Research Associate"
            path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
          />
          <TeamItem
            src="images/team_headshots/Rachel_Lange.webp"
            alt="Rachel Lange"
            text="Rachel Lange"
            label="Laboratory Technician"
            path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
          />
          <TeamItem
            src="images/team_headshots/Amy_Pfeifer.webp"
            alt="Amy Pfeifer"
            text="Amy Pfeifer"
            label="Laboratory Technician"
            path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
          />
          <TeamItem
            src="images/team_headshots/Brendan_Eddingfield.webp"
            alt="Brendan Eddingfield"
            text="Brendan Eddingfield"
            label="Laboratory Technician"
            path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
          />
        </ul>
        <ul className="cards__items">
          <TeamItem
            src="images/team_headshots/Zander_Hayes.webp"
            alt="Zander Hayes"
            text="Zander Hayes"
            label="Laboratory Technician"
            path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
          />
          <TeamItem
            src="images/team_headshots/Audrey_Oldani.webp"
            alt="Audrey Oldani"
            text="Audrey Oldani"
            label="Laboratory Technician"
            path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
          />
          <TeamItem
            src="images/team_headshots/Ella_Marks.webp"
            alt="Ella Marks"
            text="Ella Marks"
            label="Laboratory Technician"
            path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
          />
          <TeamItem
            src="images/team_headshots/Colton_Burris.webp"
            alt="Colton Burris"
            text="Colton Burris"
            label="Laboratory Technician"
            path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
          />
        </ul>
        <ul className="cards__items">
          <TeamItem
            src="images/team_headshots/Aaron_Fackler.webp"
            alt="Aaron Fackler"
            text="Aaron Fackler"
            label="Laboratory Technician"
            path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
          />
          <TeamItem
            src="images/team_headshots/"
            alt="Samantha Aarons"
            text="Samantha Aarons"
            label="Laboratory Technician"
            path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
          />
          <TeamItem
            src="images/team_headshots/"
            alt="Image of PheNode in a field"
            text="Phenotyping Station Ready for Field Testing"
            label="Laboratory Technician"
            path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
          />
          <TeamItem
            src="images/team_headshots/"
            alt="Photo at the NSF"
            text="Receiving the National Science Foundation Grant"
            label="Laboratory Technician"
            path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
          />
        </ul>
      </div>
    </div>
  );
}

export default TeamNoHero;
