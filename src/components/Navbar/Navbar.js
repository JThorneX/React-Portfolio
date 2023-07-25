import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Socials from "../Socials/Socials";
import { BiHomeHeart } from "react-icons/bi";
import { BiCommentError } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-content">
        <ul className="nav navbar">
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "#de92b8" }}
              className="nav-link"
              exact
              to="/home"
            >
              <BiHomeHeart size="45" className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              // activeStyle={{ color: "#de92b8" }}
              className="nav-link"
              exact
              to="/about"
              // style={({ isActive }) => ({
              //   color: isActive ? "#de92b8" : "blue",
              // })}
            >
              <BiCommentError size="45" className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "#de92b8" }}
              className="nav-link"
              exact
              to="/experience"
            >
              <HiOutlineLightBulb size="45" className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "#de92b8" }}
              className="nav-link"
              exact
              to="/projects"
            >
              <AiOutlineBarChart size="45" className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "#de92b8" }}
              className="nav-link"
              exact
              to="/contact"
            >
              <BiPaperPlane size="45" className="nav-icon" />
            </NavLink>
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
