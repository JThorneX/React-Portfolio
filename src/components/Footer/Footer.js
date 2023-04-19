import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div>
        <Link to={{ pathname: "https://linkedin.com" }} target="_blank"></Link>
      </div>
      <div>
        <Link to={{ pathname: "https://github.com" }} target="_blank"></Link>
      </div>
      <div>
        <Link to={{ pathname: "https://slack.com" }} target="_blank"></Link>
      </div>
      <h1>JThorne</h1>
      <h2>{/* <Coder/> */}</h2>
      <h5>&copy; All rights reserved.</h5>
    </div>
  );
}

export default Footer;
