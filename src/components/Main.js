import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [data, dataSet] = useState();
  const [searchValue, setSearchValue] = useState("spiderman");
  const [topOrFlop, setTopOrFlop] = useState("top");
  const [activ, setActiv] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=448976a292510ff0d9dc52b4c68216d4&query=" +
          searchValue +
          "&language=fr-FR"
      )
      .then((res) => dataSet(res.data.results));
  }, [searchValue]);

  return (
    <div className="main-container">
      {activ ? (
        <div className="burger-button" onClick={() => setActiv(false)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <div className="burger-button" onClick={() => setActiv(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <div className="search-container">
        <div className="form-container">
          <label htmlFor="searchInput">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            type="text"
            id="searchInput"
            placeholder="Entrer le titre d'un film"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="card-container">
        {data &&
          data

            .sort((a, b) => {
              if (topOrFlop === "top") {
                return b.vote_average - a.vote_average;
              } else if (topOrFlop === "flop") {
                return a.vote_average - b.vote_average;
              }
            })

            .map((film, index) => <Card key={index} film={film} />)}
      </div>
      <div className={activ ? "activ" : "button-container"}>
        <button id="top" onClick={() => setTopOrFlop("top")}>
          <i className="fa-solid fa-arrow-up"></i> Les mieux notés
        </button>
        <button id="flop" onClick={() => setTopOrFlop("flop")}>
          <i className="fa-solid fa-arrow-up fa-rotate-180"></i> Les moins biens
          notés
        </button>
      </div>
    </div>
  );
};

export default Main;
