import React from "react";
import "./Projects.scss";
import converse from "../../img/converse.png";
import notebook from "../../img/notebook.png";
import generator from "../../img/generator.png";
import konga from "../../img/konga.png";
import css_project from "../../img/css_project.jpg";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="sectionTitle">Projects</h1>

      <div className="projects__container">
        <img src={notebook} alt="notebook" />

        <div className="projects__container--text">
          <h1>Notebook</h1>

          <div className="projects__container--text-links">
            <a
              href="https://akindoju-notebook.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/notebook"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            Project created with react js, sass, redux to take and store Notes.
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
            Project created with react js and sass, to illustrate extensively
            the power of css grid and flexbox. Desktop view only.
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
            Project created with react js, css, and socket io on the client and
            server side, to simulate a chat room.
          </h4>
        </div>
      </div>

      <div className="projects__container">
        <img src={generator} alt="Barcode and Qr Code generator" />

        <div className="projects__container--text">
          <h1>QR Code and BarCode Generator</h1>

          <div className="projects__container--text-links">
            <a
              href="https://bar-code-generator.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/akindoju/barcode-generator"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>

          <h4>
            Project created with react js, css, to dynamically generator
            barcodes based on given input and formats, and also Qr codes.
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
