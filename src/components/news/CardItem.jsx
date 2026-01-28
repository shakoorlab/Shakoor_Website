import React from "react";
function CardItem(props) {
  return (
    <>
      <li className="cards__item" data-aos="fade-up">
        <a
          className="cards__item__link news__item__link"
          href={props.path}
          target="_blank"
          rel="noreferrer"
        >
          <figure
            className="cards__item__pic-wrap news__item__pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="article"
              loading="lazy"
              decoding="async"
              className="cards__item__img news__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
