import { Reveal } from "@/utils/Reveal";
import { DotGrid } from "../DotGrid/DotGrid";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I'm Sola<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I'm a <span>Frontend Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I have spent the last couple of years crafting captivating digital
            experiences through elegant code and innovative designs.
          </p>
        </Reveal>
        <Reveal>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className={styles.standardButton}
          >
            Contact Me
          </button>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
