import "./Projects.scss";
import React from "react";
import itis from "../../img/itis.png";
import konga from "../../img/konga.png";
import hackerGist from "../../img/hackerGist.png";
import crown_clothing from "../../img/crown_clothing.png";

const Projects = ({ offsetY }) => {
  return (
    <section className="projects" id="projects">
      <h1 className="sectionTitle" style={{ alignSelf: "center" }}>
        Projects
      </h1>

      <div className="projects__container">
        <div
          className="projects__container--item projects__container--item-1"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        />

        <div className="projects__container--item projects__container--item-2" />

        <div className="projects__container--item projects__container--item-3" />

        <div className="projects__container--item projects__container--item-4" />
      </div>

      {/* <div className="projects__container">
        <div className="projects__container--imgContainer">
          <img src={crown_clothing} alt="crown_clothing" />
        </div>

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
        <div
          className="projects__container--imgContainer"
          style={{ paddingBottom: "200px" }}
        >
          <img src={hackerGist} alt="hackerGist" />
        </div>

        <div className="projects__container--text">
          <h1>Hacker Gist</h1>

          <div className="projects__container--text-links">
            <a
              href="https://drive.google.com/file/d/1gnq-yvYDfp0VBB6ohegH_tgOKJissOSb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/hackernews-mobile"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            React Native project that utilizes the Hacker News API to display
            new stories. It has the ability to Lazy load and paginate the
            stories. Created with Redux, React-Skeletons, Redux-Persist,
            React-Navigation v6, and implements SQLite to store registered
            users.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <div className="projects__container--imgContainer">
          <img src={face_detector} alt="face_detector" />
        </div>

        <div className="projects__container--text">
          <h1>Face Detector</h1>

          <div className="projects__container--text-links">
            <a
              href="https://akindoju-facedetector.netlify.app/"
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
            Using the Clarifai machine vision API, this app finds faces in
            photos. It can sign up and log in, and it uses Redis to store
            sessions. On the frontend, it's built with React JS and Sass. For
            badge rankings and other functionalities, Node.js, express,
            PostgreSQL, and AWS Lambda are used.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <div className="projects__container--imgContainer">
          <img src={itis} alt="Itis" />
        </div>

        <div className="projects__container--text">
          <h1>Itis</h1>

          <div className="projects__container--text-links">
            <a
              href="https://akindoju-itis.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/itis"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            Web application created with React JS and Sass acting as an Online
            Food delivery business.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <div className="projects__container--imgContainer">
          <img src={konga} alt="Barcode and Qr Code generator" />
        </div>

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
        <div className="projects__container--imgContainer">
          <img src={converse} alt="converse" />
        </div>

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
            A real-time communication platform that can support more than two
            users at once developed with React JS, Socket-io, and Sass.
          </h4>
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
