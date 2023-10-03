import React, { useRef } from "react";
import "./summarized.css";
import Footer from "../Footer/Footer";
import resume from "../../assets/JThorne Resume Sept-2023.pdf";
import certificate from "../../assets/certificateDUbootcamp.pdf";
import coverLetter from "../../assets/Cover Letter.docx";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import latestproject from "../../assets/images/latestproject.png";
import currentproject from "../../assets/images/currentproject.png";
import frontend1 from "../../assets/images/birdnerd.png";
import frontend2 from "../../assets/images/quizfront.png";
import frontend3 from "../../assets/images/workdayfront.png";
import backend1 from "../../assets/images/devlore_preview.png";
import backend2 from "../../assets/images/backend2.png";
import backend3 from "../../assets/images/backend3.png";
import Meteors from "../MeteorShower/meteors";
// import "animate.css/animate.min.css";
// import { AnimationOnScroll } from "react-animation-on-scroll";

function Summary() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tvfqush",
      "template_avwjm8q",
      form.current,
      "xb0_Ys_XW56tEvstj"
    );
    e.target.reset();
  };

  return (
    <div className="summaryWrapper">
      <p className="backBtn">
        <div className="backButton">
          <a href="React-Portfolio/">
            <button className="goBackBtn">Go Back</button>
          </a>
        </div>
      </p>

      <section className="AboutMeSocialsContact">
        <div className="aboutMeWrapper">
          <div className="aboutMeText">
            <p>
              Hello! My name is Jacob Thorne and I am from Denver, Colorado.
              I've recently graduated from the University of Denver’s Center for
              Professional Development boot camp for Full Stack Development.
            </p>
          </div>
          <div className="buttonsSocial">
            <a href={resume} download>
              <button className="resumeDownloadBtn">Resume</button>
            </a>
            <a href={coverLetter} download>
              <button className="resumeDownloadBtn">Cover Letter</button>
            </a>
            <a href={certificate} download>
              <button className="resumeDownloadBtn">Certificate</button>
            </a>
          </div>
        </div>

        <div className="contactEmail">
          <div className="contactWrapper">
            <div className="socialsWrapper">
              <div className="hoverSocial">
                <a
                  href="https://www.linkedin.com/in/jake-d-d-thorne/"
                  target="_blank"
                  className="socials-icon"
                >
                  <BsLinkedin size="50" color="cyan" />
                </a>
              </div>
              <div className="hoverSocial">
                <a
                  href="https://github.com/JThorneX"
                  target="_blank"
                  className="socials-icon"
                >
                  <BsGithub size="50" color="cyan" />
                </a>
              </div>
              <div className="hoverSocial">
                <a
                  href="mailto:jake.d.d.thorne@gmail.com"
                  target="_blank"
                  className="socials-icon"
                >
                  <MdOutlineEmail size="60" color="cyan" />
                </a>
              </div>
              <div className="hoverSocial">
                <a
                  href="https://github.com/JThorneX/React-Portfolio"
                  target="_blank"
                  className="socials-icon"
                >
                  <BsBinoculars size="50" color="cyan" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ExperienceProjects">
        <div className="projectsWrapper">
          <h1>Projects</h1>
          <div className="theProjects">
            <div className="currentProject">
              <h2>Current Project</h2>
              <h4>Patient-Doctor Portal</h4>
              <a href="https://github.com/JThorneX/cra-doc" target="_blank">
                <div className="currentProjectImg">
                  <img
                    src={currentproject}
                    alt="current project"
                    className="currentImage"
                  />
                </div>
              </a>
            </div>
            <div className="latestProject">
              <h2>Latest Project</h2>
              <h4>Gatsby/React Blog</h4>
              <a href="https://github.com/JThorneX/gatsby-blog" target="_blank">
                <div className="latestProjectImg">
                  <img
                    src={latestproject}
                    alt="latest project"
                    className="latestImage"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="productGrid">
          <div className="grid projectsSmall">
            <h2>Front End Focused</h2>
            <div className="frontEndWrapper">
              <div className="projectSmall">
                <h4>Group Project 3 - React/CSS</h4>
                <a
                  href="https://github.com/JamesGeneser/Bird-Nerd"
                  target="_blank"
                >
                  <img
                    src={frontend1}
                    alt="front-end project"
                    className="frontendImage"
                  />
                </a>
              </div>
              <div className="projectSmall">
                <h4>Week 3 DU Challenge</h4>
                <a
                  href="https://github.com/JThorneX/04-challenge-bootcamp"
                  target="_blank"
                >
                  <img
                    src={frontend2}
                    alt="front-end project"
                    className="frontendImage"
                  />
                </a>
              </div>
              <div className="projectSmall">
                <h4>Week 3 DU Challenge</h4>
                <a
                  href="https://github.com/JThorneX/05-challenge-DU-bootcamp"
                  target="_blank"
                >
                  <img
                    src={frontend3}
                    alt="front-end project"
                    className="frontendImage"
                  />
                </a>
              </div>
            </div>

            <h2>Back End Focused</h2>
            <div className="back-end-wrapper">
              <div className="projectSmall">
                <h4>E-commerce Backend</h4>
                <a
                  href="https://github.com/JThorneX/challenge-13-e-commerce-back-end"
                  target="_blank"
                >
                  <img
                    src={backend2}
                    alt="back-end project"
                    className="backendImage"
                  />
                </a>
              </div>
              <div className="projectSmall">
                <h4>Group Project 2 - MySQL</h4>
                <a
                  href="https://github.com/hollyhleal/beta-tasters"
                  target="_blank"
                >
                  <img
                    src={backend1}
                    alt="back-end project"
                    className="backendImage"
                  />
                </a>
              </div>
              <div className="projectSmall">
                <h4>Social Network API</h4>
                <a
                  href="https://github.com/JThorneX/challenge-18-social-network-api"
                  target="_blank"
                >
                  <img
                    src={backend3}
                    alt="back-end project"
                    className="backendImage"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Meteors number={10} />
      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default Summary;
