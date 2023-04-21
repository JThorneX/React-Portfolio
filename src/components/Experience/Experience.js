import React from "react";
import "./experience.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import fox from "../../assets/images/foxoutline.svg";
import { SkillBars } from "react-skills";
import { GrNode } from "react-icons/gr";
import { SiJquery } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiHandlebarsdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiSequelize } from "react-icons/si";

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

  const skillsData = [
    {
      name: "HTML",
      level: 85,
      color: "cyan",
      height: 5,
    },
    {
      name: "CSS",
      level: 70,
      color: "cyan",
    },
    {
      name: "React",
      level: 70,
      color: "cyan",
    },
    {
      name: "Node.js",
      level: 55,
      color: "cyan",
    },
    {
      name: "MySQL",
      level: 45,
      color: "cyan",
    },
  ];
  return (
    <div className="exp-wrapper">
      <Navbar />
      <div className="exp-content">
        <h1>Experience & Skills</h1>
        <div className="fox-img">
          <img src={fox} alt="fox with shades" className="fox-image" />
        </div>
        <div className="experience">
          <div className="skill-bar">
            <SkillBars skills={skillsData} className="bar" />
          </div>
          <div className="skill-cluster">
            <div className-="firstrow-skill">
              <GrNode className="icon" color="cyan" size="70" />
              <SiJquery className="icon" color="cyan" size="70" />
              <SiBootstrap className="icon" color="cyan" size="70" />
              <BsGit className="icon" color="cyan" size="70" />
            </div>
            <div className="secondrow-skill">
              <GrMysql className="icon" color="cyan" size="70" />
              <SiMongodb className="icon" color="cyan" size="70" />
              <SiSequelize className="icon" color="cyan" size="70" />
              <SiHandlebarsdotjs className="icon" color="cyan" size="70" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
