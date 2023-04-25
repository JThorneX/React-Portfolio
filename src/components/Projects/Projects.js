import React from "react";
import "./projects.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import currentproject from "../../assets/images/latestproject.png";
import frontend1 from "../../assets/images/shall portfolio.png";
import frontend2 from "../../assets/images/quizfront.png";
import frontend3 from "../../assets/images/workdayfront.png";
import backend1 from "../../assets/images/devlore_preview.png";
import backend2 from "../../assets/images/backend2.png";
import backend3 from "../../assets/images/backend3.png";

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
          <a href="" target="_blank">
            GitHub Repo
          </a>
        </a>

        <div className="grid">
          <h2>Front End Focused</h2>
          <div className="front-end-wrapper">
            <a
              href="https://jthornex.github.io/SHall-React-Portfolio/"
              target="_blank"
            >
              <img
                src={frontend1}
                alt="front-end project"
                className="frontend-image"
              />
              <a href="" target="_blank">
                GitHub Repo
              </a>
            </a>
            <a
              href="https://jthornex.github.io/04-challenge-bootcamp/"
              target="_blank"
            >
              <img
                src={frontend2}
                alt="front-end project"
                className="frontend-image"
              />
              <a href="" target="_blank">
                GitHub Repo
              </a>
            </a>
            <a
              href="https://jthornex.github.io/05-challenge-DU-bootcamp/"
              target="_blank"
            >
              <img
                src={frontend3}
                alt="front-end project"
                className="frontend-image"
              />
              <a href="" target="_blank">
                GitHub Repo
              </a>
            </a>
          </div>

          <h2>Back End Focused</h2>
          <div className="back-end-wrapper">
            <a
              href="https://github.com/JThorneX/challenge-13-e-commerce-back-end"
              target="_blank"
            >
              <img
                src={backend2}
                alt="back-end project"
                className="backend-image"
              />
              <a href="" target="_blank">
                GitHub Repo
              </a>
            </a>
            <a href="https://secure-mesa-62807.herokuapp.com/" target="_blank">
              <img
                src={backend1}
                alt="back-end project"
                className="backend-image"
              />
              <a href="" target="_blank">
                GitHub Repo
              </a>
            </a>
            <a
              href="https://github.com/JThorneX/challenge-18-social-network-api"
              target="_blank"
            >
              <img
                src={backend3}
                alt="back-end project"
                className="backend-image"
              />
              <a href="" target="_blank">
                GitHub Repo
              </a>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
