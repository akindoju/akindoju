import { FC, SetStateAction, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ReactDOM from "react-dom";
import modalStyles from "../ProjectModal/ProjectModal.module.scss";
import styles from "./Menu.module.scss";
import { MdClose } from "react-icons/md";
import { Reveal } from "@/utils/Reveal";

export const Menu: FC<{
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  setSelected: React.Dispatch<SetStateAction<string>>;
}> = ({ setIsMenuOpen, setSelected }) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const menuModal = document.getElementById("menu");
  const ref = useRef(null);

  useEffect(() => {
    slideControls.start("visible");
    mainControls.start("visible");
  }, [mainControls, slideControls]);

  const TextReveal: React.FC<{
    children: JSX.Element;
    link: string;
  }> = ({ children, link }) => {
    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "fit-content",
          overflow: "hidden",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => {
            setSelected(link);
            setIsMenuOpen(false);
          }}
          className={styles.link}
        >
          {children}
        </motion.div>

        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            height: "6rem",
            background: "var(--brand)",
            zIndex: 20,
          }}
        />
      </div>
    );
  };

  const menuContent = (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={slideControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      style={{
        background: "rgb(17, 17, 17)",
      }}
      className={modalStyles.modal}
    >
      <button
        className={modalStyles.closeModalBtn}
        style={{ top: "3rem", right: "3rem" }}
        onClick={() => setIsMenuOpen(false)}
      >
        <MdClose size={"3rem"} />
      </button>

      <div className={styles.links}>
        <TextReveal link="about">
          <a href="#about">About</a>
        </TextReveal>

        <TextReveal link="experience">
          <a href="#experience">Experience</a>
        </TextReveal>

        <TextReveal link="projects">
          <a href="projects">Projects</a>
        </TextReveal>

        <TextReveal link="contact">
          <a href="contact">Contact</a>
        </TextReveal>
      </div>
    </motion.div>
  );

  return menuModal ? ReactDOM.createPortal(menuContent, menuModal) : null;
};
