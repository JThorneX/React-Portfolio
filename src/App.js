import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/ExperienceNew/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Splash from "./components/Splash/Splash";
import ScrollToTop from "./components/scrollToTop";
import Summarized from "./components/Summarized/Summarized";
import NewSplash from "./components/NewSplash/NewSplash";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* <Route path="React-Portfolio/" element={<Splash />} /> */}
          <Route path="React-Portfolio/" element={<NewSplash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/summary" element={<Summarized />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
