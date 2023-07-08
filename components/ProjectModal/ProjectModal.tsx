import styles from "./ProjectModal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <Image
          src={imgSrc}
          alt={`An image of the ${title} project.`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />

        <div className={styles.modalContent}>
          <h4>{title}</h4>

          <Link
            className={styles.links}
            target="_blank"
            rel="nofollow"
            href={projectLink}
          >
            <AiOutlineLink size="2.5rem" style={{ marginRight: "0.4rem" }} />{" "}
            Live Project
          </Link>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalTech}>{tech.join(" - ")}</div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
