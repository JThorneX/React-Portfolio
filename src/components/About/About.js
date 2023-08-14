import React from "react";
import "./about.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import resume from "../../assets/JThorne Resume July-2023-1.pdf";
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
            Hi! My name is Jacob Thorne and I am from Denver, Colorado. At the
            beginning of the year, I made the journey into being a web developer
            through the University of Denver’s Center for Professional
            Development boot camp for Full Stack Development (say that five
            times fast) and graduated in April. I’ve had a casual interest in
            coding for most of my life, but being able to utilize the
            problem-solving skills I enjoy using in the boot camp showed me how
            I could build a successful career I can truly look forward to.
            <br />
            <br /> Throughout the boot camp, I came to really enjoy React, CSS,
            and general UI/UX and, along with wireframing and the kanban
            development process, was able to establish workflows with my
            classmates that felt very effective. With persistence, methodical
            research, and more than a few sleepless nights, I was able to
            graduate with a 96% average and a newfound respect for my own
            complete lack of willingless to quit when I get discouraged. Beyond
            that I've really enjoyed how coding can apply the skills that I
            developed while getting my B.A. in history from Metropolitan
            University of Denver a few years ago.
            <br></br>
            <br></br>My personal future goals regarding coding include learning
            Typescript, approaching from a mobile first viewpoint (an industry
            standard as far as I can tell, but wasn't heavily taught in the boot
            camp), improving my advanced CSS, and learning and experimenting
            with other frameworks like Angular and Gatsby - something I've
            already started working towards, which you can see in my projects
            tab. I've quickly realized that coding is a life-long pursuit of
            knowledge which, while daunting, is something I crave and hope to
            continue.
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
