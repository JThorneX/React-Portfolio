import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ModeToggle from "./components/ModeToggle/Mode";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Navbar />
          <Header />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <ModeToggle />
          <Footer />
        </Routes>
      </Router>
    </>
  );
}

export default App;
