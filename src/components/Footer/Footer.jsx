import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <h1 className="sectionTitle" style={{ color: "white" }}>
        About
      </h1>

      <p>
        Hello! My name is Olusola Akindoju. I wrote my first line of code back
        in 2018 and have since progressed to become a Web developer. During that
        time I have been able to learn the fundamentals of web developement. I
        am passionate about improving my skills and learning new technologies.
      </p>

      <h4>Contact:</h4>
      <a
        href="mailto:davidd.akindoju@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        davidd.akindoju@gmail.com
      </a>
    </section>
  );
};

export default Footer;
