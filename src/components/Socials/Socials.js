import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";


function Socials() {
  return (
    <div>
      <div>
        <Link to={{ pathname: "https://linkedin.com" }} target="_blank">
          <BsLinkedin />
        </Link>
      </div>
      <div>
        <Link to={{ pathname: "https://github.com" }} target="_blank">
          <BsGithub />
        </Link>
      </div>
      <div>
        <Link to={{ pathname: "https://slack.com" }} target="_blank">
          <BsSlack />
        </Link>
      </div>
    </div>
  );
}

export default Socials;
