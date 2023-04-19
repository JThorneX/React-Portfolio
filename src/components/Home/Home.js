import React from "react";
import "./home.css";
import Header from "../Header/Header";
import Socials from "../Socials/Socials";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Socials />

      <div className="container home-container">
        <div className="home-img">
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
