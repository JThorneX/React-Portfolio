import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import fox from "../../assets/images/foxoutline.svg";
// import { SkillBars } from "react-skills";

function Experience() {
  // const skills = [
  //   { type: "HTML", level: 85 },
  //   { type: "CSS", level: 70 },
  //   { type: "React", level: 70 },
  //   { type: "Node.js", level: 55 },
  //   { type: "MongoDB", level: 45 },
  // ];

  // const colors = {
  //   bar: "cyan",
  //   title: {
  //     text: "#abc123",
  //     background: "#fff",
  //   },
  // };

  // const skillsData = [
  //   {
  //     name: "ReactJS",
  //     level: 100,
  //     color: "cyan",
  //     height: 10,
  //     labelsWidth: 10,
  //     width: 10,
  //   },
  //   {
  //     name: "SomeOtherTech",
  //     level: 85,
  //     color: "red",
  //   },
  // ];
  return (
    <div className="exp-wrapper">
      <Navbar />
      <div className="experience">
        <h1>Experience & Skills</h1>
        <div className="skill-bar">
          {/* <SkillBars skills={skillsData} className="bar" /> */}
          <div className="fox-img">
            <img src={fox} alt="fox with shades" className="fox-image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
