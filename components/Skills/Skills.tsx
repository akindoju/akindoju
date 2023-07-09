import styles from "./Skills.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/utils/Reveal";

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">NextJS</span>
            <span className="chip">React Native</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Redux</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Firebase</span>
            <span className="chip">Jest</span>
            <span className="chip">Git</span>
            <span className="chip">Jira</span>
            <span className="chip">Agile Development</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS & SCSS</span>
            <span className="chip">JavaScript</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
