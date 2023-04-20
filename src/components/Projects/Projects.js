import React from "react";
import "./projects.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import currentproject from "../../assets/images/miles wallpaper.jpg";

function Projects() {
  return (
    <div className="project-wrapper">
      <Navbar />
      <div className="projects-wrapper">
        <h1>Projects</h1>
        <div className="current-project-img">
          <img
            src={currentproject}
            alt="current project"
            className="current-image"
          />
        </div>

        <div className="grid">
          <div className="front-end-wrapper">
            <h2>Front End Focused</h2>
            <img
              src={currentproject}
              alt="front-end project"
              className="frontend-image"
            />
            <img
              src={currentproject}
              alt="front-end project"
              className="frontend-image"
            />
            <img
              src={currentproject}
              alt="front-end project"
              className="frontend-image"
            />
          </div>

          <div className="back-end-wrapper">
            <h2>Back End Focused</h2>
            <img
              src={currentproject}
              alt="back-end project"
              className="backend-image"
            />
            <img
              src={currentproject}
              alt="back-end project"
              className="backend-image"
            />
            <img
              src={currentproject}
              alt="back-end project"
              className="backend-image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
