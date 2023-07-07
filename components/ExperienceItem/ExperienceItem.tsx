import { Reveal } from "@/utils/Reveal";
import styles from "./ExperienceItem.module.scss";

interface Props {
  title: string;
  position: string;
  time: string;
  description: string[];
  tech: string[];
}

export const ExperienceItem = ({
  title,
  position,
  time,
  description,
  tech,
}: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
      </div>
      <Reveal>
        <div>
          {description.map((item: string) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <div className={styles.bullet} />
              <p className={styles.description}>{item}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
