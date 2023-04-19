import React from "react";
import "./socials.css";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";

function Socials() {
  return (
    <>
      <div>
        <a href="https://linkedin.com" target="_blank" className="socials-icon">
          <BsLinkedin size="35" />
        </a>
      </div>
      <div>
        <a href="https://github.com" target="_blank" className="socials-icon">
          <BsGithub size="35" />
        </a>
      </div>
      <div>
        <a href="https://slack.com" target="_blank" className="socials-icon">
          <BsSlack size="35" />
        </a>
      </div>
    </>
  );
}

export default Socials;
