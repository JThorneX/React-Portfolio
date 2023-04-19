import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-wrapper">
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
        {/* <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
