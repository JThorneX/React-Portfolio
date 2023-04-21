import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";
import { BiHomeHeart } from "react-icons/bi";
import { BiCommentError } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-content" >
        <ul className="nav navbar" >
          <li
            className="nav-item"
          >
            <Link className="nav-link" to="/home">
              <BiHomeHeart size="45" className="nav-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <BiCommentError size="45" className="nav-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience">
              <HiOutlineLightBulb size="45" className="nav-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              <AiOutlineBarChart size="45" className="nav-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <BiPaperPlane size="45" className="nav-icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-socials">
        <Socials />
      </div>
    </div>
  );
}

export default Navbar;
