import React from "react";
import "./newsplash.css";
import { Link } from "react-router-dom";

import whitelogo from "../../assets/images/white logo jthorne.svg";

function NewSplash() {
  return (
    // <Link className="nav-link" to="/home">
    //   <div className="splash-wrapper">
    //     <div className="white-logo">
    //       <img src={whitelogo} alt="white logo" className="white-logo-img" />
    //     </div>
    //     <h2>Click anywhere to enter</h2>
    //   </div>
    // </Link>
    <div className="splash-wrapper">
      <div className="white-logo">
        <img src={whitelogo} alt="white logo" className="white-logo-img" />
      </div>
      <div className="buttons">
        <a href="React-Portfolio/summary">
          <button className="summary">Ain't Nobody Got Time For This</button>
        </a>
        <a href="React-Portfolio/home">
          <button className="fullSite">Show Me What You Got</button>
        </a>
      </div>
    </div>
  );
}

export default NewSplash;
