import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import blacklogo from "../../assets/images/black logo jthorne.svg";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="position-fixed">
        <Navbar />
        <div className="container home-container">
          <div className="home-content">
            <h1>Jacob Thorne</h1>
            <div className="black-logo">
              <img
                src={blacklogo}
                alt="black logo"
                className="black-logo-img"
              />
            </div>
            <h3>Web Dev</h3>
          </div>
        </div>
      </div>
      <div className="particles-wrapper">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            autoplay: true,
            fpsLimit: 40,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#000"],
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: 3,
                random: true,
              },
              move: {
                enable: true,
                speed: 6,
                random: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
            },
            background: {
              image: "radial-gradient(#4a0000, #000)",
            },
          }}
        />
      </div>
    </>
  );
}

export default Home;
