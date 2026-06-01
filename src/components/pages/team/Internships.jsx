import { useEffect, useRef, useState } from "react";
import TeamItem from "./TeamItem";
import Pagination from "@mui/material/Pagination";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/InternImports";

function Internships() {
  const [currentPage, setCurrentPage] = useState(1);
  const headerRef = useRef(null);
  const items = [
    {
      src: images.NoPhoto,
      alt: "Raleigh Delf",
      text: "Raleigh Delf",
      title: "High School Intern",
    },
    {
      src: images.Auralia,
      alt: "Auralia Ibel",
      text: "Auralia Ibel",
      title: "High School Intern",
    },
    {
      src: images.Grace,
      alt: "Grace Chambers",
      text: "Grace Chambers",
      title: "High School Intern",
    },
    {
      src: images.Gabrielle,
      alt: "Gabrielle Moore",
      text: "Gabrielle Moore",
      title: "High School Intern",
    },
    {
      src: images.Madison,
      alt: "Madison Moore",
      text: "Madison Moore",
      title: "High School Intern",
    },
    {
      src: images.Navin,
      alt: "Navin Narayanan",
      text: "Navin Narayanan",
      title: "High School Intern",
    },
    {
      src: images.Katherine_N,
      alt: "Katherine Nguyen",
      text: "Katherine Nguyen",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Aidan Zaza",
      text: "Aidan Zaza",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Jacob Morton",
      text: "Jacob Morton",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Cefarino Patino",
      text: "Cefarino Patino",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Devin Scharer",
      text: "Devin Scharer",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Victoria Frerichs",
      text: "Victoria Frerichs",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Jasmine Saliba",
      text: "Jasmine Saliba",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Heidi Gaertner",
      text: "Heidi Gaertner",
      title: "High School Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Addison Engelmeyer",
      text: "Addison Engelmeyer",
      title: "High School Intern",
    },
  ];
  const itemsPerPage = 9;
  const pageStart = (currentPage - 1) * itemsPerPage;
  const pageItems = items.slice(pageStart, pageStart + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const rows = [];
  for (let index = 0; index < pageItems.length; index += 3) {
    rows.push(pageItems.slice(index, index + 3));
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  return (
    <>
      <h1 ref={headerRef}>Lab Interns</h1>
      <br></br>
      <div className="cards_wrapper cards__wrapper--team">
        {rows.map((row, rowIndex) => (
          <ul
            key={`intern-row-${rowIndex}`}
            className="cards__items cards__items--team"
          >
            {row.map((item, itemIndex) => (
              <TeamItem
                key={`${item.alt}-${itemIndex}`}
                src={item.src}
                alt={item.alt}
                text={item.text}
                title={item.title}
              />
            ))}
          </ul>
        ))}
        <div className="pagination-container">
          <Pagination
            count={totalPages}
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
