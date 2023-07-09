import { MyLinks } from "@/components/MyLinks/MyLinks";
import { Reveal } from "@/utils/Reveal";
import { SectionHeader } from "@/utils/SectionHeader";
import styles from "./About.module.scss";
import { Skills } from "../Skills/Skills";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              Hey there! I&apos;m Olusola Akindoju, a passionate Frontend
              Developer from Nigeria. With a strong focus on TypeScript, React,
              React Native, and Next.js, I specialize in creating exceptional
              user experiences. I love exploring the latest tools and libraries,
              including Redux, and Tailwind, and I believe in using the right
              tools for each project. My goal is to build robust and visually
              appealing web applications that leave a lasting impression.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve had good fortune being a member of fantastic teams
              dedicated to creating amazing user experiences that leave lasting
              impressions.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, you&apos;ll often find me exploring the latest
              trends and contributing to Open-Source projects, as well as
              reading and writing for leisure during my spare time.
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
