import styles from "./Heading.module.scss";
import { FC, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineAlignRight } from "react-icons/ai";

export const Heading: FC<{
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  selected: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
}> = ({ setIsMenuOpen, isMenuOpen, selected, setSelected }) => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, [setSelected]);

  return (
    <header className={styles.heading_container}>
      <div className={styles.heading}>
        <button
          onClick={() => window.open("/my-resume.pdf")}
          className={styles.outlineButton}
        >
          My resume
        </button>

        <motion.nav
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.sections}
        >
          <motion.a
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="#about"
            onClick={() => {
              setSelected("about");
            }}
            className={selected === "about" ? styles.selected : ""}
          >
            About
          </motion.a>
          <motion.a
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="#experience"
            onClick={() => setSelected("experience")}
            className={selected === "experience" ? styles.selected : ""}
          >
            Experience
          </motion.a>
          <motion.a
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#projects"
            onClick={() => setSelected("projects")}
            className={selected === "projects" ? styles.selected : ""}
          >
            Projects
          </motion.a>

          <motion.a
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#contact"
            onClick={() => setSelected("contact")}
            className={selected === "contact" ? styles.selected : ""}
          >
            Contact
          </motion.a>
        </motion.nav>

        <AiOutlineAlignRight
          size="3rem"
          className={styles.menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  );
};
