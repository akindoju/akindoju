import React from "react";
import "./Projects.scss";
import converse from "../../img/converse.png";
import crown_clothing from "../../img/crown_clothing.png";
import face_detector from "../../img/face_detector.png";
import konga from "../../img/konga.png";
import css_project from "../../img/css_project.jpg";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="sectionTitle">Projects</h1>

      <div className="projects__container">
        <img src={crown_clothing} alt="crown_clothing" />

        <div className="projects__container--text">
          <h1>Crown Clothing</h1>

          <div className="projects__container--text-links">
            <a
              href="https://crwn-clthn.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/crown-clothn"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            Fully operational e-commerce website built with React, Firebase, and
            Sass. It is a progressive web app that also uses known best
            practices such as redux and redux thunks to handle asynchronous
            activities.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <img src={converse} alt="converse" />

        <div className="projects__container--text">
          <h1>Converse</h1>

          <div className="projects__container--text-links">
            <a
              href="https://akindoju-converse.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/converse-front"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            {/* Project created with react js, css, and socket io on the client and
            server side, to simulate a chat room. */}
            A real-time communication platform that can support more than two
            users at once developed with React JS, Socket-io, and Sass.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <img src={konga} alt="Barcode and Qr Code generator" />

        <div className="projects__container--text">
          <h1>Konga Clone</h1>

          <div className="projects__container--text-links">
            <a
              href="https://akindoju-konga-clone.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/konga-clone"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            Konga clone project created with React JS and sass, to illustrate
            extensively the power of css grid and flexbox. Desktop view only.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <img src={face_detector} alt="face_detector" />

        <div className="projects__container--text">
          <h1>Face Detector</h1>

          <div className="projects__container--text-links">
            <a
              href="https://webfacedetector.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/Face-Detector"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            This software detects faces in pictures using the Clarifai machine
            vision API. It has the ability to sign up and log in. It's made with
            React JS and tachyons on the frontend. Node.js, express, PostgreSQL,
            and other technologies are used in the backend.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <img src={css_project} alt="CSS Project" />

        <div className="projects__container--text">
          <h1>Blog</h1>

          <div className="projects__container--text-links">
            <a
              href="https://akindoju-css.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/akindoju-css"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            Project created with react js, sass, as a landing page for blogging.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Projects;
