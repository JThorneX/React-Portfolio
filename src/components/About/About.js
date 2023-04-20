import React from "react";
import "./about.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import scotlandbg from "../../assets/images/eilean castle.png";

function About() {
  return (
    <div className="about-wrapper">
      <Navbar />
      <div className="about-content">
        <h1>About Me</h1>
        <div className="content-about">
          <p>
            My name is Jacob Thorne and I am from Denver, Colorado. I have
            recently made the journey into being a web developer through the
            University of Denver’s Center for Professional Development boot camp
            for Full Stack Development. I’ve had a casual interest in coding for
            most of my life, but being able to utilize my problem-solving skills
            in the boot camp showed me how I could build a career I can enjoy.
            When I’m not coding, I am usually reading, playing video games
            (unfortunately, mostly MMOs), or playing with my dogs.
          </p>
        </div>
      </div>

      <div className="scotland-bg">
        <img
          src={scotlandbg}
          alt="scotland background"
          className="scotland-img"
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
