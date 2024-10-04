import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1>FindYourMovies</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/page1">Coup de coeur</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
