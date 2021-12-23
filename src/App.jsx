import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
