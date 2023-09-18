import React from "react";
import "./socials.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";

function Socials() {
  return (
    <div className="socials-wrapper">
      <div
        className="hover"
        onMouseOver={({ target }) => (target.style.color = "#006f6f")}
        onMouseOut={({ target }) => (target.style.color = "cyan")}
      >
        <a
          href="https://www.linkedin.com/in/jake-d-d-thorne/"
          target="_blank"
          className="socials-icon"
        >
          <BsLinkedin size="25" color="cyan" />
        </a>
      </div>
      <div
        className="hover"
        onMouseOver={({ target }) => (target.style.color = "#006f6f")}
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
        onMouseOver={({ target }) => (target.style.color = "#006f6f")}
        onMouseOut={({ target }) => (target.style.color = "cyan")}
      >
        <a
          href="https://github.com/JThorneX/React-Portfolio"
          target="_blank"
          className="socials-icon"
        >
          <BsBinoculars size="25" color="cyan" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
