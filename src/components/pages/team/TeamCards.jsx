import React from "react";
import TeamItem from "./TeamItem";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/ImageImports";

function TeamCards() {
  return (
    <>
      <h1>Our Team</h1>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <TeamItem
            src={images.Nadia}
            alt="Nadia Shakoor"
            text="Nadia Shakoor"
            title="Principal Investigator"
          />
          <TeamItem
            src={images.Jocelyn}
            alt="Jocelyn Saxton"
            text="Jocelyn Saxton"
            title="Lab Manager"
          />
          <TeamItem
            src={images.Monica}
            alt="Monica Alsup "
            text="Monica Alsup"
            title="Administrative Assistant"
          />
        </ul>

        <ul className="cards__items">
          <TeamItem
            src={images.Nur}
            alt="Nurzaman Ahmed"
            text="Nurzaman Ahmed"
            title="Engineering Research Scientist"
          />
          <TeamItem
            src={images.Alice}
            alt="Alice Kujur"
            text="Alice Kujur"
            title="Research Scientist"
          />
          <TeamItem
            src={images.Marie}
            alt="Marie De Gracia Coquerel"
            text="Marie De Gracia Coquerel"
            title="Research Associate"
          />
        </ul>
        <ul className="cards__items">
          <TeamItem
            src={images.Bob}
            alt="Boubacar Gano"
            text="Boubacar Gano"
            title="Postdoctoral Associate"
          />

          <TeamItem
            src={images.Daniele}
            alt="Daniele Azzaro"
            text="Daniele Azzaro"
            title="Research Associate"
          />
          <TeamItem
            src={images.Nate}
            alt="Nathaniel Eck"
            text="Nathaniel Eck"
            title="Data Scientist 1"
          />
        </ul>

        <ul className="cards__items">
          <TeamItem
            src={images.Jake}
            alt="Jaccob Stanton"
            text="Jaccob Stanton"
            title="Data Science Associate"
          />
          <TeamItem
            src={images.Colton}
            alt="Colton Burris"
            text="Colton Burris"
            title="Laboratory Technician"
          />
          <TeamItem
            src={images.NoPhoto}
            alt="Jacob Sterzik"
            text="Jacob Sterzik"
            title="Laboratory Technician"
          />
        </ul>
        <ul className="cards__items">
          <TeamItem
            src={images.Lee}
            alt="Lee Dobson"
            text="Lee Dobson"
            title="Laboratory Technician"
          />
          <TeamItem
            src={images.NoPhoto}
            alt="Paige Michalik"
            text="Paige Michalik"
            title="Laboratory Technician"
          />
          <TeamItem
            src={images.NoPhoto}
            alt="Keiko Farah"
            text="Keiko Farah"
            title="Laboratory Technician"
          />
        </ul>
        <ul className="cards__items">
          <TeamItem
            src={images.Ella}
            alt="Ella Marks"
            text="Ella Marks"
            title="Laboratory Assistant"
          />
          <TeamItem
            src={images.NoPhoto}
            alt="Cefarino Patino"
            text="Cefarino Patino"
            title="High School Intern"
          />
          <TeamItem
            src={images.NoPhoto}
            alt="Jacob Morton"
            text="Jacob Morton"
            title="High School Intern"
          />
        </ul>
      </div>
    </>
  );
}

export default TeamCards;
