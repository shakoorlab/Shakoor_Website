import TeamItem from "./TeamItem";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/ActiveTeamImports";

function TeamCards() {
  const items = [
    {
      src: images.Nadia,
      alt: "Nadia Shakoor",
      text: "Nadia Shakoor",
      title: "Assistant Member and Principal Investigator",
    },
    {
      src: images.Jocelyn,
      alt: "Jocelyn Saxton",
      text: "Jocelyn Saxton",
      title: "Lab Manager",
    },
    {
      src: images.Monica,
      alt: "Monica Alsup ",
      text: "Monica Alsup",
      title: "Administrative Assistant",
    },
    {
      src: images.Nur,
      alt: "Nurzaman Ahmed",
      text: "Nurzaman Ahmed",
      title: "Engineering Research Scientist",
    },
    {
      src: images.Marie,
      alt: "Marie De Gracia Coquerel",
      text: "Marie De Gracia Coquerel",
      title: "Research Scientist",
    },
    {
      src: images.Bob,
      alt: "Boubacar Gano",
      text: "Boubacar Gano",
      title: "Postdoctoral Associate",
    },
    {
      src: images.Nate,
      alt: "Nathaniel Eck",
      text: "Nathaniel Eck",
      title: "Data Scientist 1",
    },
    {
      src: images.Jake,
      alt: "Jaccob Stanton",
      text: "Jaccob Stanton",
      title: "Data Scientist 1",
    },
    {
      src: images.Colton,
      alt: "Colton Burris",
      text: "Colton Burris",
      title: "Laboratory Technician",
    },
    {
      src: images.Paige,
      alt: "Paige Michalik",
      text: "Paige Michalik",
      title: "Laboratory Technician",
    },
    {
      src: images.Julia,
      alt: "Julia Talbert",
      text: "Julia Talbert",
      title: "Laboratory Technician",
    },
    {
      src: images.NoPhoto,
      alt: "Brooke Williams",
      text: "Brooke Williams",
      title: "Laboratory Technician",
    },
    {
      src: images.NoPhoto,
      alt: "Katie Koziatek",
      text: "Katie Koziatek",
      title: "Laboratory Technician",
    },
    {
      src: images.Sasi,
      alt: "Sasi Velchuri",
      text: "Sasi Velchuri",
      title: "Pivot to Plants Fellow",
    },
    {
      src: images.Auralia,
      alt: "Auralia Ibel",
      text: "Auralia Ibel",
      title: "High School Intern",
    },
  ];
  const rows = [];
  for (let index = 0; index < items.length; index += 3) {
    rows.push(items.slice(index, index + 3));
  }

  return (
    <>
      <h1>Our Team</h1>
      <div className="cards__wrapper cards__wrapper--team">
        {rows.map((row, rowIndex) => (
          <ul
            key={`team-row-${rowIndex}`}
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
      </div>
    </>
  );
}

export default TeamCards;
