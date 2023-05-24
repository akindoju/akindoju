import { MyLinks } from "@/components/MyLinks/MyLinks";
import { Reveal } from "@/utils/Reveal";
import { SectionHeader } from "@/utils/SectionHeader";
import styles from "./About.module.scss";
import { Skills } from "../Skills/Skills";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              Hey! My name is Olusola Akindoju, in case you missed it, I'm a
              Frontend Developer from Abuja, Nigeria. I specialize in the React,
              Typescript, and SCSS, with supporting tools like Redux, but love
              building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I've had good fortune being a member of fantastic teams dedicated
              to creating amazing user experiences that leave lasting
              impressions ☺️.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, you'll often find me exploring the latest trends
              and advancements in software development, seeking inspiration from
              both established apps and emerging startups. I believe in the
              power of staying ahead of the curve, always striving to expand my
              skills and expertise in this ever-evolving mobile landscape.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Skills />
      </div>
    </section>
  );
};
