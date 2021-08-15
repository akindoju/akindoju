import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
