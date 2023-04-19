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
        <Link
          to={{ pathname: "https://linkedin.com" }}
          target="_blank"
          className="socials-icon"
        >
          <BsLinkedin size="35" />
        </Link>
      </div>
      <div>
        <Link
          to={{ pathname: "https://github.com" }}
          target="_blank"
          className="socials-icon"
        >
          <BsGithub size="35" />
        </Link>
      </div>
      <div>
        <Link
          to={{ pathname: "https://slack.com" }}
          target="_blank"
          className="socials-icon"
        >
          <BsSlack size="35" />
        </Link>
      </div>
    </>
  );
}

export default Socials;
