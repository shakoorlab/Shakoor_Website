import React, { useState } from "react";
import TeamItem from "./TeamItem";
import Pagination from "@mui/material/Pagination";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/ImageImports";

function Internships() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <h1>Lab Interns</h1>
      <br></br>
      <div className="cards_wrapper">
        {currentPage === 1 && (
          <>
            <ul className="cards__items">
              <TeamItem
                src={images.Gabrielle}
                alt="Gabrielle Moore"
                text="Gabrielle Moore"
                title="High School Intern"
              />
              <TeamItem
                src={images.Madison}
                alt="Madison Moore"
                text="Madison Moore"
                title="High School Intern"
              />
              <TeamItem
                src={images.Navin}
                alt="Navin Narayanan"
                text="Navin Narayanan"
                title="High School Intern"
              />
            </ul>
            <ul className="cards__items">
              <TeamItem
                src={images.Katherine_N}
                alt="Katherine Nguyen"
                text="Katherine Nguyen"
                title="High School Intern"
              />
              <TeamItem
                src={images.NoPhoto}
                alt="Aidan Zaza"
                text="Aidan Zaza"
                title="High School Intern"
              />

              <TeamItem
                src={images.NoPhoto}
                alt="Jacob Morton"
                text="Jacob Morton"
                title="High School Intern"
              />
            </ul>
            <ul className="cards__items">
              <TeamItem
                src={images.NoPhoto}
                alt="Cefarino Patino"
                text="Cefarino Patino"
                title="High School Intern"
              />
              <TeamItem
                src={images.NoPhoto}
                alt="Devin Scharer"
                text="Devin Scharer"
                title="High School Intern"
              />
              <TeamItem
                src={images.NoPhoto}
                alt="Victoria Frerichs"
                text="Victoria Frerichs"
                title="High School Intern"
              />
            </ul>
          </>
        )}
        {currentPage === 2 && (
          <>
            <ul className="cards__items">
              <TeamItem
                src={images.NoPhoto}
                alt="Jasmine Saliba"
                text="Jasmine Saliba"
                title="High School Intern"
              />
              <TeamItem
                src={images.NoPhoto}
                alt="Heidi Gaertner"
                text="Heidi Gaertner"
                title="High School Intern"
              />
              <TeamItem
                src={images.NoPhoto}
                alt="Addison Engelmeyer"
                text="Addison Engelmeyer"
                title="High School Intern"
              />
            </ul>
          </>
        )}
        <div className="pagination-container">
          <Pagination
            count={2}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>
    </>
  );
}

export default Internships;
