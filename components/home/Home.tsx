import React from "react";
import { Hero } from "../Hero/Hero";
import { Heading } from "../Heading/Heading";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Experience } from "../Experience/Experience";
import { Contact } from "../Contact/Contact";

export const Home = () => {
  return (
    <main>
      <Heading />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div
        style={{
          height: "200px",
          background:
            "linear-gradient(180deg, var(--background), var(--background-dark))",
        }}
      />
    </main>
  );
};
