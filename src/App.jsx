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
      {/* <AnimatedCursor
        innerSize={12}
        outerSize={40}
        color="255, 255, 255"
        outerAlpha={0.1}
        innerScale={1.02}
        outerScale={1.1}
        outerStyle={{
          border: "1px solid #fff",
          background: "transparent",
          zIndex: 9999,
        }}
        innerStyle={{
          border: "1px solid #fff",
          background: "rgba(255,255,255,0.5)",
          cursor: "pointer",
          zIndex: 9999,
        }}
      /> */}
      <Header offsetY={offsetY} />
      <Skills offsetY={offsetY} />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
