import { useEffect, useRef, useState } from "react";
import CardItem from "./CardItem";
import Pagination from "@mui/material/Pagination";
import "../styles/Cards.css";
import images from "../../assets/images/news/NewsImageImports";
import nadia_image from "../../assets/images/team/ActiveTeamImports.js";
import team_image from "../../assets/images/team/team1.webp";

function Cards() {
  const [currentPage, setCurrentPage] = useState(1);
  const headerRef = useRef(null);
  const hasPaginatedRef = useRef(false);
  const itemsPerPage = 9;
  const items = [
    {
      src: images.article_19,
      alt: "Dr. Shakoor discussing the PheNode system on Fox 2",
      text: "Dr. Shakoor on the PheNode System Helping Farmers Keep Pace with a Changing Climate",
      label: "May 28, 2026",
      path: "https://www.linkedin.com/posts/donald-danforth-plant-science-center_plantscience-precisionagriculture-cropstressmonitoring-activity-7465794901616533504-Udju",
    },
    {
      src: images.article_22,
      alt: "Agrela Ecosystems closes a $500K funding round",
      text: "Agrela Ecosystems Closes $500K Funding Round to Scale PheNode",
      label: "May 21, 2026",
      path: "https://www.linkedin.com/posts/donald-danforth-plant-science-center_phenode-from-fields-to-highways-activity-7463275983853436929-fmdG",
      imgStyle: { objectPosition: "center 38%" },
    },
    {
      src: nadia_image.Nadia,
      alt: "Nadia Shakoor Posing for a Photo",
      text: "Scientist Spotlight: Nadia Shakoor, Ph.D. — The Academy of Science - St. Louis",
      label: "May 20, 2026",
      path: "https://www.linkedin.com/posts/academy-of-science-st--louis_scientist-spotlight-nadia-shakoor-phd-activity-7462949738846515200-yYVe",
    },
    {
      src: images.article_20,
      alt: "Earth Day — regenerative agriculture and sorghum research",
      text: "Earth Day: Advancing Regenerative Agriculture with Sorghum",
      label: "April 21, 2026",
      path: "https://www.linkedin.com/posts/donald-danforth-plant-science-center_earthday-regenerativeagriculture-sorghum-activity-7452358006635147264-VQbD",
      imgStyle: { objectPosition: "center 25%" },
    },
    {
      src: images.article_21,
      alt: "Donald Danforth Plant Science Center joins the ARISE partner series",
      text: "Donald Danforth Plant Science Center Joins ARISE",
      label: "April 10, 2026",
      path: "https://www.linkedin.com/posts/plantbiology-biotechnology-research-share-7448399657157931009-KgXN/",
    },
    {
      src: team_image,
      alt: "Nadia Shakoor and Team Posing for a Photo",
      text: "Global Sorghum 'Pangenome' Published in Nature Accelerates Discovery of Resilient Crop Traits",
      label: "March 11, 2026",
      path: "https://www.danforthcenter.org/news/global-sorghum-pangenome/",
    },
    {
      src: nadia_image.Nadia,
      alt: "Nadia Shakoor Posing for a Photo",
      text: "Dr. Nadia Shakoor recognized as one of the honorees of the 2026 Outstanding St. Louis Scientists Awards.",
      label: "March 10, 2026",
      path: "https://academyofsciencestl.org/news/nadia-shakoor-ph-d/",
    },
    {
      src: images.article_18,
      alt: "Nadia Shakoor Working in the Greenhouse",
      text: "Movers & Shapers: Enterprising St. Louisans behind rising startups",
      label: "January 5, 2026",
      path: "https://www.stlmag.com/business/movers-shapers-startups/?utm_campaign=BizSTL&utm_medium=email&_hsenc=p2ANqtz-91ZNri9JOp7j5l_8kp8rBBYCejOGsQPlLFOClLY_FXlm1nJqz5WaVXf3CbRVlrQVBb_LsF4bOJgaxMNh5MGBatuo_6PPXikQENQL9XV8Jup7Mcsa0&_hsmi=396871112&utm_content=396871112&utm_source=hs_email",
    },
    {
      src: images.article_15,
      alt: "Danforth's New Assistant Member",
      text: "The Donald Danforth Plant Science Center Announces New Assistant Member",
      label: "August 6, 2024",
      path: "https://www.danforthcenter.org/news/danforth-center-announces-new-assistant-member/",
    },
    {
      src: images.article_16,
      alt: "Meet the FieldDock",
      text: "Meet the FieldDock: A Smart-Farm System for Sustainable Agriculture",
      label: "June 25, 2024",
      path: "https://www.danforthcenter.org/news/meet-the-fielddock-a-smart-farm-system-for-sustainable-agriculture/",
    },
    {
      src: images.article_14,
      alt: "Meet the founder",
      text: "Meet the founder: Agrela's Nadia Shakoor",
      label: "December 11, 2023",
      path: "https://agfundernews.com/agrelas-nadia-shakoor-on-how-to-restore-biodiversity-to-us-highways",
    },
    {
      src: images.article_13,
      alt: "PheNode in Field",
      text: "Leading Transportation Partnership Deploys Agrela's Vegetation Monitoring Technology",
      label: "November 16, 2023",
      path: "https://apnews.com/press-release/3bl-media/georgia-plants-transportation-d58ca32fd396a4fd767d0dce333d7581",
    },
    {
      src: images.article_17,
      alt: "Aerial View of New Field Research Site",
      text: "Teamwork Takes Flight at New Field Research Site",
      label: "October 30, 2023",
      path: "https://www.newswise.com/articles/teamwork-takes-flight-at-new-field-research-site",
    },
    {
      src: images.article_12,
      alt: "PheNode at the Danforth Center",
      text: "Data startup Agrela Ecosystems, begins commercializing technology",
      label: "September 20, 2023",
      path: "https://www.bizjournals.com/stlouis/inno/stories/news/2023/09/20/agrela-ecosystems-data-phenode-danforth-center.html",
    },
    {
      src: images.article_11,
      alt: "Sorghum field",
      text: "Harnessing the Power of Climate Smart Crops",
      label: "January 1, 2023",
      path: "https://www.bizjournals.com/stlouis/news/2023/01/01/sorghum-harnessing-the-power-of-climate-smart-crop.html",
    },
    {
      src: images.article_8,
      alt: "Photo of Sorghum",
      text: "DDPSC Collaborates with Sorghum Producers",
      label: "September 28, 2022",
      path: "https://www.eurekalert.org/news-releases/966324",
    },
    {
      src: images.article_7,
      alt: "Photo at the NSF",
      text: "Receiving the National Science Foundation Grant",
      label: "September 15, 2022",
      path: "https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php",
    },
    {
      src: images.article_1,
      alt: "Image of PheNode in field",
      text: "Salk Researchers Launch Collaboration",
      label: "September 14, 2021",
      path: "https://www.salk.edu/news-release/salk-plant-researchers-launch-collaboration-to-breed-carbon-capturing-sorghum/",
    },
    {
      src: images.article_6,
      alt: "Image of Dr. Shakoor working with PheNode",
      text: "You Should Get to Know Dr. Shakoor",
      label: "August 5, 2021",
      path: "https://www.bizjournals.com/stlouis/inno/stories/profiles/2021/08/05/st-louis-character-2021-nadia-shakoor.html",
    },
    {
      src: images.article_5,
      alt: "Image of phenotyper",
      text: "ETHINKSTL: In This Episode for the Week",
      label: " February 10, 2021",
      path: "https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor",
    },
  ];
  const pageStart = (currentPage - 1) * itemsPerPage;
  const pageItems = items.slice(pageStart, pageStart + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const rows = [];
  for (let index = 0; index < pageItems.length; index += 3) {
    rows.push(pageItems.slice(index, index + 3));
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    hasPaginatedRef.current = true;
  };

  useEffect(() => {
    if (!hasPaginatedRef.current) {
      return;
    }
    if (!headerRef.current) {
      return;
    }
    const offset = 16;
    const scrollToHeader = () => {
      const targetTop =
        headerRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetTop, behavior: "auto" });
    };
    const frame = window.requestAnimationFrame(scrollToHeader);
    return () => window.cancelAnimationFrame(frame);
  }, [currentPage]);

  return (
    <div className="cards">
      <h1 ref={headerRef}>In the News</h1>
      <div className="cards__wrapper">
        {rows.map((row, rowIndex) => (
          <ul
            key={`news-row-${rowIndex}`}
            className="cards__items cards__items--news"
          >
            {row.map((item, itemIndex) => (
              <CardItem
                key={`${item.path}-${itemIndex}`}
                src={item.src}
                alt={item.alt}
                text={item.text}
                label={item.label}
                path={item.path}
                imgStyle={item.imgStyle}
              />
            ))}
          </ul>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}

export default Cards;
