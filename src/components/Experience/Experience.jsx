import React from "react";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h1 className="sectionTitle">Experience</h1>

      <div className="experience__details">
        <h1 className="experience__details--1">Freelance Software Developer</h1>

        <div className="experience__details--2">
          <h1>
            Technologies: HTML5, CSS3, Javascript, React, MySql, Git, Sass.
          </h1>
        </div>

        <div className="experience__details--3">
          <h1> Responsibilities: </h1>
          <p>Created clothing E-Commerce website.</p>
          <p>Created app to detect faces on image. etc.</p>
        </div>
      </div>

      <div className="experience__details">
        <h1 className="experience__details--1">Software Developer Intern</h1>

        <div className="experience__details--2">
          <h1>Company: Pear Systems Development Company.</h1>
          <h1>
            Technologies: HTML5, CSS3, Javascript, React, MySql, Git, Sass.
          </h1>
        </div>

        <div className="experience__details--3">
          <h1> Responsibilities: </h1>
          <p>
            Refactored vanilla javascript code with react js which improved page
            loading.
          </p>
          <p>
            Improved server connection with databse using knex, hence easing the
            process. etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
