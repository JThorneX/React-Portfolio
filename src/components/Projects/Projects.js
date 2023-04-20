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
        <h2 className="latest-project">Latest Project</h2>
        <a href="" target="_blank">
          <div className="current-project-img">
            <img
              src={currentproject}
              alt="current project"
              className="current-image"
            />
          </div>
        </a>

        <div className="grid">
          <h2>Front End Focused</h2>
          <div className="front-end-wrapper">
            <a href="https://www.google.com" target="_blank">
              <img
                src={currentproject}
                alt="front-end project"
                className="frontend-image"
              />
            </a>
            <a href="https://www.cnn.com" target="_blank">
              <img
                src={currentproject}
                alt="front-end project"
                className="frontend-image"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <img
                src={currentproject}
                alt="front-end project"
                className="frontend-image"
              />
            </a>
          </div>

          <h2>Back End Focused</h2>
          <div className="back-end-wrapper">
            <a href="https://secure-mesa-62807.herokuapp.com/" target="_blank">
              <img
                src={currentproject}
                alt="back-end project"
                className="backend-image"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <img
                src={currentproject}
                alt="back-end project"
                className="backend-image"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <img
                src={currentproject}
                alt="back-end project"
                className="backend-image"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
