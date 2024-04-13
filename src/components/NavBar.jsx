import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create a Crewmate!</Link>
        </li>
        <li>
          <Link to="/gallery">Crewmate Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
