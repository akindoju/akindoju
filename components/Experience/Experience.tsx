import { SectionHeader } from "@/utils/SectionHeader";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";

const experience = [
  {
    title: "Affixdot",
    position: "Mobile & Web Developer",
    time: "2022 - Present",
    description: [
      "Part of a team of engineers involved in the successful implementation of new components and techniques resulting in over 30% increase in engagement.",
      "Implemented a web-based portal for accessing customer events hence enhancing user involvement and experience within the first 3 months of launch.",
      "Planned website development, converting mockups into usable web presence with React, React Native, and TypeScript.",
      "Implemented a cohesive and responsive approach and strategy, ensuring consistency across all deliverables.",
    ],
    tech: [
      "Typescript",
      "React",
      "React Native",
      "NextJS",
      "SCSS",
      "Redux",
      "Git",
      "Firebase",
      "Jira",
    ],
  },
  {
    title: "HNG Internship",
    position: "Frontend Developer",
    time: "2022 - 2022",
    description: [
      "Garnered invaluable guidance and mentorship from esteemed industry professionals, who imparted expert insights on clean code practices and effective communication strategies.",
      "Successfully completed rigorous and immersive training sessions and workshops that focused on cutting-edge frontend technologies, including HTML, CSS, and JavaScript. Acquired an advanced skill set and in-depth understanding of industry best practices, enabling the creation of robust and visually stunning web applications.",
      "Collaborated with cross-functional team members, leveraging collective strengths to overcome complex challenges, consistently meet tight deadlines, and deliver exceptional, high-quality results.",
    ],
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    title: "Pear System Development Company",
    position: "Frontend Developer",
    time: "2021 - 2021",
    description: [
      "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.",

      "Teamed on user-centric design strategy in the translation of UX and business requirements into coded solutions.",

      "Developed software using React and Typescript to develop features for both mobile and desktop platforms.",

      "Researched emerging web technologies and trends for possible incorporation into sites.",
    ],
    tech: ["React", "CSS & SCSS", "Typescript", "Redux", "PostgreSQL", "Jest"],
  },
];

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};
