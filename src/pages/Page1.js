import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import axios from "axios";

const Page1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let dataList = window.localStorage.film
      ? window.localStorage.film.split(",")
      : [];

    for (let i = 0; i < dataList.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${dataList[i]}?api_key=448976a292510ff0d9dc52b4c68216d4`
        )
        .then((res) => setData((data) => [...data, res.data]));
    }
  }, []);

  return (
    <div className="page-container">
      <Header />
      <h2>
        <i className="fa-regular fa-heart"></i> Coups de coeur{" "}
      </h2>
      <div className="card-container2">
        {data && data.map((film, index) => <Card key={index} film={film} />)}
      </div>
    </div>
  );
};

export default Page1;
