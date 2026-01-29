import { Link } from "react-router-dom";

function TeamItem(props) {
  return (
    <>
      <li className="cards__item" data-aos="fade-up">
        <Link className="cards__item__link team__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap team__item__pic-wrap">
            <img
              src={props.src}
              alt="article"
              loading="lazy"
              decoding="async"
              className="cards__item__img team__item__img"
            />
          </figure>
          <div className="cards__item__info team__item__info">
            <h5 className="cards__items__text">{props.text}</h5>
            <h6 className="cards__items__title">{props.title}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TeamItem;
