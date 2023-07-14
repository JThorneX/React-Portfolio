import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import cyanlogo from "../../assets/images/cyan logo jthorne.svg";
import Socials from "../Socials/Socials";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-socials">
        <Socials />
      </div>
      <div className="footer-content">
        <h1>JThorne</h1>
        <p>{/* <Coder /> */}</p>
        <h5>&copy; All rights reserved.</h5>
      </div>
      <div className="contact-footer-btn">
        <Link to="" className="link">
          <button
            className="contact-btn btn"
            onClick={() =>
              (window.location = "mailto:jake.d.d.thorne@gmail.com")
            }
          >
            Contact Me <AiOutlineMail />
          </button>
        </Link>
        <div className="cyan-logo">
          <img src={cyanlogo} alt="cyan logo" className="cyan-logo-img" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
