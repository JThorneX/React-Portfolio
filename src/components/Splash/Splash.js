import React from "react";
import "./splash.css";
import { Link } from "react-router-dom";

import whitelogo from "../../assets/images/white logo jthorne.svg";

function Splash() {
  return (
    <Link className="nav-link" to="/home">
      <div className="splash-wrapper">
        <div className="white-logo">
          <img src={whitelogo} alt="white logo" className="white-logo-img" />
        </div>
        <h2>Click anywhere to enter</h2>
      </div>
    </Link>
  );
}

export default Splash;
