import { Reveal } from "@/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { ProjectModal } from "../ProjectModal/ProjectModal";
import styles from "./Projects.module.scss";
import Image from "next/image";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: hovered ? "100%" : "97%",
              height: hovered ? "100%" : "95%",
            }}
          />
        </div>

        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              <Link href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineLink size="2.8rem" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        tech={tech}
      />
    </>
  );
};
