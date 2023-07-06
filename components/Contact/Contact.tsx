import { Reveal } from "@/utils/Reveal";
import styles from "./Contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Want to connect? send me an email! You can find me on{" "}
            <Link
              href="https://www.linkedin.com/in/olusola-akindoju-4123551a7/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            as well.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:davidd.akindoju@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>davidd.akindoju@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
