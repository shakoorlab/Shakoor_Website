import { useState } from "react";
import TeamItem from "./TeamItem";
// import Pagination from "@mui/material/Pagination";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/AlumniImports";

function LabAlumni() {
  const [currentPage, setCurrentPage] = useState(1);
  const items = [
    {
      src: images.Katie,
      alt: "Katie Koziatek",
      text: "Katie Koziatek",
      title: "Laboratory Technician",
    },
    {
      src: images.Jocelyn,
      alt: "Jocelyn Saxton",
      text: "Jocelyn Saxton",
      title: "Lab Manager",
    },
    {
      src: images.Alice,
      alt: "Alice Kujur",
      text: "Alice Kujur",
      title: "Research Scientist",
    },
    {
      src: images.Daniele,
      alt: "Daniele Azzaro",
      text: "Daniele Azzaro",
      title: "Research Associate",
    },
    {
      src: images.Cicero,
      alt: "Cicero Menezes",
      text: "Cicero Menezes",
      title: "Visiting Scientist",
    },
    {
      src: images.NoPhoto,
      alt: "Keiko Farah",
      text: "Keiko Farah",
      title: "Laboratory Technician",
    },
    {
      src: images.Lee,
      alt: "Lee Dobson",
      text: "Lee Dobson",
      title: "Laboratory Technician",
    },
    {
      src: images.NoPhoto,
      alt: "Lacey Drew",
      text: "Lacey Drew",
      title: "Laboratory Technician",
    },
    {
      src: images.Neil,
      alt: "Neil Docherty",
      text: "Neil Docherty",
      title: "Field Technician",
    },
    {
      src: images.Audrey,
      alt: "Audrey Oldani",
      text: "Audrey Oldani",
      title: "Laboratory Technician",
    },
    {
      src: images.Zander,
      alt: "Zander Hayes",
      text: "Zander Hayes",
      title: "Laboratory Technician",
    },
    {
      src: images.Rachel,
      alt: "Rachel Lange",
      text: "Rachel Lange",
      title: "Laboratory Technician",
    },
    {
      src: images.Amy,
      alt: "Amy Pfeifer",
      text: "Amy Pfeifer",
      title: "Laboratory Technician",
    },
    {
      src: images.Brendan,
      alt: "Brendan Eddingfield",
      text: "Brendan Eddingfield",
      title: "Laboratory Technician",
    },
    {
      src: images.Aaron,
      alt: "Aaron Fackler",
      text: "Aaron Fackler",
      title: "Laboratory Technician",
    },
    {
      src: images.Ella,
      alt: "Ella Marks",
      text: "Ella Marks",
      title: "Laboratory Assistant",
    },
    {
      src: images.Gabriel,
      alt: "Gabriel Bernstein",
      text: "Gabriel Bernstein",
      title: "Laboratory Assistant",
    },
    {
      src: images.NoPhoto,
      alt: "Emma Gandolfo",
      text: "Emma Gandolfo",
      title: "Laboratory Technician",
    },
    {
      src: images.NoPhoto,
      alt: "John Bao",
      text: "John Bao",
      title: "Laboratory Technician",
    },
    {
      src: images.NoPhoto,
      alt: "Jay Carter",
      text: "Jay Carter",
      title: "Senior Lab Technician",
    },
  ];
  const rows = [];
  for (let index = 0; index < items.length; index += 3) {
    rows.push(items.slice(index, index + 3));
  }

  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  // };

  return (
    <>
      <h1>Lab Alumni</h1>
      <br></br>
      <div className="cards_wrapper cards__wrapper--team">
        {currentPage === 1 && (
          <>
            {rows.map((row, rowIndex) => (
              <ul
                key={`alumni-row-${rowIndex}`}
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
          </>
        )}
      </div>
    </>
  );
}

export default LabAlumni;
