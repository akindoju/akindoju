import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = () => {
  const [navBarActive, setNavBarActive] = useState(false);

  const settingNavBar = () => {
    window.scrollY >= 650 ? setNavBarActive(true) : setNavBarActive(false);
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", settingNavBar);

  return (
    <section className="headerContainer">
      <ul className={navBarActive ? "navigation active" : "navigation"}>
        <Link to="skills" smooth duration={500}>
          <li>Skills</li>
        </Link>
        <Link to="experience" smooth duration={500}>
          <li>Experience</li>
        </Link>
        <Link to="projects" smooth duration={500}>
          <li>Project</li>
        </Link>
        <Link to="footer" smooth duration={500}>
          <li>About</li>
        </Link>
      </ul>

      <div className="header">
        <div className="header__title">
          <h1>Akindoju Olusola</h1>
          <h4>Software Developer</h4>
        </div>

        <div className="header__icons">
          <a
            href="mailto:davidd.akindoju@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>Email</title>
              <path d="M18 2c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h16zM13.63 11.1l6.37 4.9v-2l-5.12-3.9 5.12-4.1v-2l-10 8-10-8v2l5.12 4.1-5.12 3.9v2l6.37-4.9 3.63 2.9 3.63-2.9z"></path>
            </svg>
          </a>

          <a
            href="https://github.com/akindoju/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <title>Github</title>
              <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;