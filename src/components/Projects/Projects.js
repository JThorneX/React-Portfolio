import React from "react";
import "./projects.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import latestproject from "../../assets/images/latestproject.png";
import currentproject from "../../assets/images/currentproject.png";
import frontend1 from "../../assets/images/birdnerd.png";
import frontend2 from "../../assets/images/quizfront.png";
import frontend3 from "../../assets/images/workdayfront.png";
import backend1 from "../../assets/images/devlore_preview.png";
import backend2 from "../../assets/images/backend2.png";
import backend3 from "../../assets/images/backend3.png";
import Meteors from "../MeteorShower/meteors";

function Projects() {
  return (
    <div className="project-wrapper">
      <Navbar />
      <div className="projects-wrapper">
        <div className="zIndexWrapper">
          <h1>Projects</h1>
          <div className="current-project">
            <h2>Working On...</h2>
            <h4>Patient-Doctor Portal</h4>
            <a href="" target="_blank">
              <div className="current-project-img">
                <img
                  src={currentproject}
                  alt="current project"
                  className="current-image"
                />
              </div>
            </a>
          </div>

          <div className="latest-project">
            <h2>Latest Project</h2>
            <h4>Gatsby/React Blog</h4>
            <a href="https://github.com/JThorneX/gatsby-blog" target="_blank">
              <div className="latest-project-img">
                <img
                  src={latestproject}
                  alt="latest project"
                  className="latest-image"
                />
              </div>
            </a>
          </div>

          <div className="grid projects-small">
            <h2>Front End Focused</h2>
            <div className="front-end-wrapper">
              <div className="project-small">
                <h4>Project 3 - React/Custom CSS</h4>
                <a
                  href="https://github.com/JamesGeneser/Bird-Nerd"
                  target="_blank"
                >
                  <img
                    src={frontend1}
                    alt="front-end project"
                    className="frontend-image"
                  />
                </a>
              </div>
              <div className="project-small">
                <h4>Week 3 DU Challenge #4</h4>
                <a
                  href="https://github.com/JThorneX/04-challenge-bootcamp"
                  target="_blank"
                >
                  <img
                    src={frontend2}
                    alt="front-end project"
                    className="frontend-image"
                  />
                </a>
              </div>
              <div className="project-small">
                <h4>Week 3 DU Challenge #5</h4>
                <a
                  href="https://github.com/JThorneX/05-challenge-DU-bootcamp"
                  target="_blank"
                >
                  <img
                    src={frontend3}
                    alt="front-end project"
                    className="frontend-image"
                  />
                </a>
              </div>
            </div>

            <h2>Back End Focused</h2>
            <div className="back-end-wrapper">
              <div className="project-small">
                <h4>E-commerce Backend Structure</h4>
                <a
                  href="https://github.com/JThorneX/challenge-13-e-commerce-back-end"
                  target="_blank"
                >
                  <img
                    src={backend2}
                    alt="back-end project"
                    className="backend-image"
                  />
                </a>
              </div>
              <div className="project-small">
                <h4>Project 2 - Built with MySQL</h4>
                <a
                  href="https://github.com/hollyhleal/beta-tasters"
                  target="_blank"
                >
                  <img
                    src={backend1}
                    alt="back-end project"
                    className="backend-image"
                  />
                </a>
              </div>
              <div className="project-small">
                <h4>Social Network API Structure</h4>
                <a
                  href="https://github.com/JThorneX/challenge-18-social-network-api"
                  target="_blank"
                >
                  <img
                    src={backend3}
                    alt="back-end project"
                    className="backend-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Meteors />
      <Footer />
    </div>
  );
}

export default Projects;
