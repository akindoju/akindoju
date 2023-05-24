import styles from "./MyLinks.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/olusola-akindoju-4123551a7/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="3.5rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://www.github.com/akindoju"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="3.5rem" />
        </Link>
      </motion.span>
    </div>
  );
};
