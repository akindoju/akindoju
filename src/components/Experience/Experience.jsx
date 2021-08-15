import React from "react";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience">
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium temporibus excepturi sed officia adipisci quibusdam
            velit perferendis aliquam id sequi quisquam dolores nemo esse,
            minima minus voluptate nesciunt eaque obcaecati!
          </p>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium temporibus excepturi sed officia adipisci quibusdam
            velit perferendis aliquam id sequi quisquam dolores nemo esse,
            minima minus voluptate nesciunt eaque obcaecati!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
