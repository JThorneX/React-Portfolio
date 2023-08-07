import React from "react";
import "./about.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import resume from "../../assets/JThorne Resume July-2023-1.pdf";

function About() {
  return (
    <div className="about-wrapper">
      <Navbar />
      <div className="about-content">
        <div className="about-me-header">
          <h1>About Me</h1>
        </div>
        <div className="about-me-text">
          <p>
            Hi! My name is Jacob Thorne and I am from Denver, Colorado. I have
            recently made the journey into being a web developer through the
            University of Denver’s Center for Professional Development boot camp
            for Full Stack Development and graduated in April. I’ve had a casual
            interest in coding for most of my life, but being able to utilize my
            problem-solving skills in the boot camp showed me how I could build
            a career I can enjoy. Throughout the bootcamp, I came to really
            enjoy React, CSS, and general UI/UX and, along with wireframing and
            the kanban development process, was able to establish workflows with
            my classmates that felt very effective. Beyond that I've really
            enjoyed how coding can apply my researching skills that I developed
            while getting my B.A. in history from Metropolitan University of
            Denver a few years ago.
            <br></br>
            <br></br>My personal future goals regarding coding include learning
            Typescript, improving my CSS, and learning and experimenting with
            other frameworks like Angular and Gatsby.<br></br>
            <br></br> When I’m not coding, I am usually reading, playing video
            games, baking, or playing with my dogs.
          </p>
          <div className="buttons">
            <button className="resumeDownload">
              <a href={resume} download>
                Resume
              </a>
            </button>
            <button className="resumeDownload">Certificate</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
