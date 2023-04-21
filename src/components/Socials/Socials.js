import React from "react";
import "./socials.css";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";

function Socials() {
  return (
    <>
      <div
        className="hover"
        onMouseOver={({ target }) => (target.style.color = "#f4bf0e")}
        onMouseOut={({ target }) => (target.style.color = "cyan")}
      >
        <a href="https://linkedin.com" target="_blank" className="socials-icon">
          <BsLinkedin size="25" color="cyan" />
        </a>
      </div>
      <div
        className="hover"
        onMouseOver={({ target }) => (target.style.color = "#f4bf0e")}
        onMouseOut={({ target }) => (target.style.color = "cyan")}
      >
        <a
          href="https://github.com/JThorneX"
          target="_blank"
          className="socials-icon"
        >
          <BsGithub size="25" color="cyan" />
        </a>
      </div>
      <div
        className="hover"
        onMouseOver={({ target }) => (target.style.color = "#f4bf0e")}
        onMouseOut={({ target }) => (target.style.color = "cyan")}
      >
        <a href="https://slack.com" target="_blank" className="socials-icon">
          <BsSlack size="25" color="cyan" />
        </a>
      </div>
    </>
  );
}

export default Socials;
