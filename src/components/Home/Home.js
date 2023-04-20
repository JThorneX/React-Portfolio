import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Header />

      <div className="container home-container">
        <div className="home-img"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
