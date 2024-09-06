import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Internship from "./components/Internship";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contactme from "./components/Contactme";

import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero theme={theme} />
      <Internship />
      <Skills />
      <Projects />
      <Education />
      <Contactme />

      <Footer theme={theme} />
    </div>
  );
};

export default App;
