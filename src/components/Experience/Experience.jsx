import React, { useEffect } from "react";
import "./Experience.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="experience" id="experience">
      <p
        className="sectionTitle"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-easing="ease-out"
        data-aos-duration="0"
      >
        Experience
      </p>

      <div
        className="experience__details"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-easing="ease-out"
        data-aos-duration="0"
      >
        <div className="experience__details--1">
          <h1>Freelance Mobile and Web Developer</h1>
        </div>

        <div className="experience__details--2" style={{ maxWidth: "50vw" }}>
          <div>React JS</div>
          <div>React Native</div>
          <div>NextJS</div>
          <div>Firebase</div>
          <div>Postgresql</div>
          <div>Redux</div>
          <div>Context API</div>
          <div>CSS</div>
          <div>SASS</div>
          <div>Git</div>
        </div>

        <div className="experience__details--3">
          <p>
            Created website using the standard HTML,CSS, amd Javascript
            practices
          </p>
          <p>
            Used REST API to save and generate data dynamically from a database.
          </p>
        </div>
      </div>

      <div
        className="experience__details"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-easing="ease-out"
        data-aos-duration="0"
      >
        <div className="experience__details--1">
          <h1>Pear Systems Development Company</h1>
          <h2>Web Developer</h2>
        </div>

        <div className="experience__details--2">
          <div>React JS</div>
          <div>Postgresql</div>
          <div>Redux</div>
          <div>CSS</div>
          <div>SASS</div>
          <div>Tailwind</div>
          <div>Git</div>
        </div>

        <div className="experience__details--3">
          <p>Developed better SEO and PWAs for web applications.</p>
          <p>
            Integrated Socket-io client into a web app for real-time
            communication.
          </p>
          <p>
            Refactored Vanilla Javascript code with React JS for simplicity and
            better performance.
          </p>
          <p>
            Created flexible and responsive web-apps utilising SASS, Tailwind,
            and other CSS practices.
          </p>
        </div>
      </div>

      <div
        className="experience__details"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-easing="ease-out"
        data-aos-duration="0"
      >
        <div className="experience__details--1">
          <h1>Affixdot</h1>
          <h2>Mobile and Web Developer</h2>
        </div>

        <div className="experience__details--2">
          <div>React Native</div>
          <div>React JS</div>
          <div>NextJS</div>
          <div>Firebase</div>
          <div>Redux</div>
          <div>CSS</div>
          <div>Git</div>
        </div>

        <div className="experience__details--3">
          <p>Utilised Redux for flexible app state.</p>
          <p>Integrated live-stream feature using Agora RTC and Agora RTM.</p>
          <p>Created and optimised a functional company and admin website.</p>
          <p>
            Maintained and deployed cloud functions using Firebase cloud
            function.
          </p>
          <p>
            Utilised Google Maps API to give a variety of features based on the
            user's location.
          </p>
          <p>
            Ensured code robustness using Typescript on the React-Native mobile
            application.
          </p>
          <p>
            Integrated other React-Native modules such as push-notifications,
            in-app payments, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
