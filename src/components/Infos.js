import React from "react";

const Infos = ({ film }) => {
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return newDate;
  };

  const idToGenre = () => {
    const genreArray = [];

    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const stockLocal = () => {
    let storedData = window.localStorage.film
      ? window.localStorage.film.split(",")
      : [];

    if (!storedData.includes(film.id.toString())) {
      storedData.push(film.id);
      window.localStorage.film = storedData;
    }
  };

  const deleteLike = () => {
    let storedData = window.localStorage.film.split(",");
    let newData = storedData.filter((id) => id != film.id);
    window.localStorage.film = newData;
  };

  return (
    <div className="infos-container">
      <div className="up-part">
        <img
          src={
            film.poster_path
              ? "https://image.tmdb.org/t/p/original/" + film.poster_path
              : "./img/poster.jpg"
          }
          alt={"photo de " + film.title}
        />
        <div className="text">
          <h3>{film.title}</h3>
          <p>
            {film.release_date
              ? "Sortie le : " + dateParser(film.release_date)
              : null}
          </p>
          <h4>Note : {film.vote_average.toFixed(1)}/10</h4>
          <ul>
            {film.genre_ids
              ? idToGenre()
              : film.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div className="down-part">
        <h4>Synopsis</h4>
        <p>{film.overview}</p>
      </div>

      {film.genre_ids ? (
        <button id="coupDeCoeur" onClick={() => stockLocal()}>
          <i className="fa-regular fa-heart"></i>
        </button>
      ) : (
        <button
          id="coupDeCoeur"
          onClick={() => {
            deleteLike();
            window.location.reload(true);
          }}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      )}
    </div>
  );
};

export default Infos;
