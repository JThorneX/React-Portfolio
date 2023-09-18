import React from "react";
import "./experience.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import fox from "../../assets/images/foxoutline.svg";
import { SkillBars } from "react-skills";
import { GrNode } from "react-icons/gr";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiHandlebarsdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import wireframe1 from "../../assets/images/wireframing1.png";
import wireframe2 from "../../assets/images/wireframing2.png";
import wireframe3 from "../../assets/images/wireframing3.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { VscSearch } from "react-icons/vsc";
import { MdOutlineSchool, MdSchool } from "react-icons/md";
import { TfiPackage } from "react-icons/tfi";

function Experience() {
  const skillsData = [
    {
      name: "HTML",
      level: 90,
      color: "cyan",
      height: 5,
      label: "cyan",
    },
    {
      name: "CSS",
      level: 80,
      color: "cyan",
    },
    {
      name: "React",
      level: 80,
      color: "cyan",
    },
    {
      name: "Bootstrap",
      level: 75,
      color: "cyan",
    },
    {
      name: "Node.js",
      level: 65,
      color: "cyan",
    },
  ];
  return (
    <div className="exp-wrapper">
      <Navbar />
      <div className="experience-header">
        <h1>Experience & Skills</h1>
      </div>
      <div className="exp-first-wrapper">
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
              <SiReact className="icon" color="cyan" size="70" />
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
      <div className="exp-second-wrapper">
        <div className="exp-second">
          <div className="column-one">
            <section className="wireframing">
              <h3>Wireframing</h3>
              <a
                href="https://www.figma.com/file/fuFIY2YYvyS9TnS4V1Ehtv/Portfolio-Wireframe?type=design&mode=design&t=tS2RHkAVHuh4Bqyo-1"
                target="_blank"
              >
                <img
                  src={wireframe1}
                  alt="wireframe example"
                  className="wireframe-box"
                />
              </a>
              <a
                href="https://www.figma.com/file/HToJP1esoNx1Ka7ej6A1pe/recipe-blog?type=design&node-id=0%3A1&mode=design&t=TawLAAXMgADVX9XM-1"
                target="_blank"
              >
                <img
                  src={wireframe2}
                  alt="wireframe example"
                  className="wireframe-box"
                />
              </a>
              <a
                href="https://www.figma.com/file/UcdgmhtoWX4x9ybsRszI59/ecommerce?type=design&mode=design&t=HnVIEWBmUCMbAnwn-1"
                target="_blank"
              >
                <img
                  src={wireframe3}
                  alt="wireframe example"
                  className="wireframe-box"
                />
              </a>
            </section>
          </div>
          <div className="timeline">
            <h2>The last few years...</h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work times"
                contentStyle={{ background: "#f48b31", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #f48b31",
                }}
                date="2016-2020"
                iconStyle={{ background: "#16a2b5", color: "#fff" }}
                icon={<MdOutlineSchool />}
              >
                <h3 className="vertical-timeline-element-title big-text-card-l">
                  BA in History
                </h3>
                <h4 className="vertical-timeline-element-subtitle sub-text-card-l">
                  3.46 GPA
                </h4>
                <p className="little-text-card-l">
                  Metropolitan State University of Denver
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work times"
                contentStyle={{ background: "#16a2b5", color: "#000" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #16a2b5",
                }}
                date="May 2021-Nov 2022"
                iconStyle={{ background: "#f48b31", color: "#fff" }}
                icon={<TfiPackage />}
              >
                <h3 className="vertical-timeline-element-title big-text-card-d">
                  Distribution Coordinator
                </h3>
                <h4 className="vertical-timeline-element-subtitle sub-text-card-d">
                  Parker, CO
                </h4>
                <p className="little-text-card-d card-mid">
                  Top 5% auditor processing medical kits with a 95% non-error
                  rate
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work times"
                contentStyle={{ background: "#f48b31", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #f48b31",
                }}
                date="Feb-May 2023"
                iconStyle={{ background: "#16a2b5", color: "#fff" }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title big-text-card-l">
                  University of Denver Full Stack Developer Coding Boot Camp
                </h3>
                <h4 className="vertical-timeline-element-subtitle sub-text-card-l">
                  Denver, CO
                </h4>
                <p className="little-text-card-l">
                  Collaborated on 3 projects in groups of classmates &
                  maintained a 96% average on all assignments
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work times"
                contentStyle={{ background: "#16a2b5", color: "#000" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #16a2b5",
                }}
                date="2023"
                iconStyle={{ background: "#f48b31", color: "#fff" }}
                icon={<VscSearch />}
              >
                <h3 className="vertical-timeline-element-title big-text-card-d">
                  Job Hunting
                </h3>
                <h4 className="vertical-timeline-element-subtitle sub-text-card-d">
                  Littleton, CO
                </h4>
                <p className="little-text-card-d card-mid">
                  Looking for work as a developer.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
