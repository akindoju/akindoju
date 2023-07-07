import React, { useEffect, useState } from "react";
import { Hero } from "../Hero/Hero";
import { Heading } from "../Heading/Heading";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Experience } from "../Experience/Experience";
import { Contact } from "../Contact/Contact";
import { Menu } from "../Menu/Menu";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const body = document.querySelector("body");

    if (isMenuOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isMenuOpen]);

  return (
    <main>
      <Heading
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        selected={selected}
        setSelected={setSelected}
      />
      {isMenuOpen && (
        <Menu setIsMenuOpen={setIsMenuOpen} setSelected={setSelected} />
      )}
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
