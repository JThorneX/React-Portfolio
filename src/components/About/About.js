import React from "react";
import "./about.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import resume from "../../assets/JThorne Resume Sept-2023.pdf";
import certificate from "../../assets/certificateDUbootcamp.pdf";

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
            Hello! My name is Jacob Thorne and I am from Denver, Colorado. At the
            beginning of the year, I made the journey into being a developer
            through the University of Denver’s Center for Professional
            Development boot camp for Full Stack Development and graduated in
            April. I’ve had a casual interest in coding for most of my life, but
            being able to utilize the problem-solving skills I enjoy using in
            the boot camp showed me how I could build a successful career I can
            truly look forward to.
            <br></br>
            <br></br>My goals for my career amount to two things. The first is
            to never stop learning different languages and techniques for coding
            - a goal that I have no doubt will be easy to maintain. The second,
            however, is to get a job that will help me make an impact beyond
            just the bottom line. Nonprofits, clean energy, animal welfare, or
            anything that helps groups of vulnerable people are the ideal
            sectors and I am very motivated and keen to begin my path to helping
            my planet and the people who inhabit it.
            <br></br>
            <br></br> When I’m not coding, I am usually reading, playing video
            games, baking, or playing with my dogs.
          </p>
          <div className="buttons">
            <a href={resume} download>
              <button className="resumeDownload">Resume</button>
            </a>
            <a href={certificate} download>
              <button className="resumeDownload">Certificate</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
