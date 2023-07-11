import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import whitelogo from "../../assets/images/white logo jthorne.svg";

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
                src={whitelogo}
                alt="white logo"
                className="white-logo-img"
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
                value: "#003840",
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
                value: ["#cf1fae", "#757676", "#864699", "#cff9fc", "#000"],
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
              image: "radial-gradient(#005966, #000)",
            },
          }}
        />
      </div>
    </>
  );
}

export default Home;
