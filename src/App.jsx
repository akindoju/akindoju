import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);

  const settingNavBar = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", settingNavBar);

    return () => {
      window.removeEventListener("scroll", settingNavBar);
    };
  }, []);

  return (
    <div className="app">
      <Header offsetY={offsetY} />
      <Skills offsetY={offsetY} />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
