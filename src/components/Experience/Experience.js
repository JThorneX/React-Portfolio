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
import wireframe1 from "../../assets/images/wireframing1.png";
import wireframe2 from "../../assets/images/wireframing2.png";

function Experience() {
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
      <div className="exp-second">
        <div className="column-one">
          <section className="wireframing">
            <h3>Wireframing</h3>
            <a
              href="https://github.com/JThorneX/challenge-13-e-commerce-back-end"
              target="_blank"
            >
              <img
                src={wireframe1}
                alt="wireframe example"
                className="wireframe-box"
              />
            </a>
            <a
              href="https://github.com/JThorneX/challenge-13-e-commerce-back-end"
              target="_blank"
            >
              <img
                src={wireframe2}
                alt="wireframe example"
                className="wireframe-box"
              />
            </a>
          </section>
        </div>
        <div className="timeline"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
