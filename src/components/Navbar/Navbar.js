import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav navbar">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/experience">
          Experience
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
