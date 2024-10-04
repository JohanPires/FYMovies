import React, { useState } from "react";
import Infos from "./Infos";

const Card = ({ film }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="card">
      <div className="card-display">
        <img
          src={
            film.poster_path
              ? "https://image.tmdb.org/t/p/original/" + film.poster_path
              : "./img/poster.jpg"
          }
          alt={"photo de " + film.title}
          onClick={() => setShowInfo(true)}
        />
        <h3>{film.title}</h3>
        {showInfo && (
          <div className="more-infos">
            <Infos film={film} />
            <button id="close" onClick={() => setShowInfo(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
