import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <h1 className="sectionTitle" style={{ color: "white" }}>
        About
      </h1>

      <p>
        Hello! My name is Olusola Akindoju and I am a Mobile and Web Developer.
        I enjoy creating applications that scale. Some of the tools I use
        include: React JS, React Native, CSS, SASS, Redux, e.t.c. I love
        learning and I'm always adding new skills and improving the quality of
        my products.
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
