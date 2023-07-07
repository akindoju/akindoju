import { SectionHeader } from "@/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Affixdot",
    imgSrc: "images/affixdot.png",
    projectLink: "https://affixdottech.page.link/YaCK",
    tech: ["React Native", "Typescript", "Firebase", "Redux"],
    description:
      "An event management application that offers a seamless, intuitive, and feature-rich solution for users and event organizers alike.",
    modalContent: (
      <>
        <p>
          An event management application that offers a seamless, intuitive, and
          feature-rich solution for users and event organizers alike.
        </p>
        <p>
          This app leverages your location and interests to bring events
          happening around you closer.
        </p>
        <p>
          It also includes group and private chat functionality, allowing users
          engage in discussions, share their excitement, and coordinate plans
          with other attendees of the same event or to have personalized
          interactions.
        </p>
        <p>
          Users can create profiles, customize their preferences, and save their
          favorite events. This personalized approach ensures that the app
          provides tailored event recommendations and delivers a personalized
          user experience.
        </p>
      </>
    ),
  },
  {
    title: "Affixdot Web",
    imgSrc: "images/affixdot-web.png",
    projectLink: "https://www.affixdot.com",
    tech: [
      "React Native Web",
      "Typescript",
      "SCSS & CSS",
      "Next JS",
      "Firebase",
    ],
    description:
      "This remarkable website exemplifies the skill and expertise of its creator, offering a glimpse into the world of seamless event organization and unforgettable experiences.",
    modalContent: (
      <>
        <p>
          This remarkable website exemplifies the skill and expertise of its
          creator, offering a glimpse into the world of seamless event
          organization and unforgettable experiences.
        </p>
        <p>
          Crafted with meticulous attention to detail, this website beautifully
          captures the essence of the event management application. Powered by
          the cutting-edge technologies of React Native, Firebase, TypeScript,
          and Redux, it showcases the seamless integration of these tools to
          deliver a user-centric, feature-rich platform.
        </p>
      </>
    ),
  },
  {
    title: "Maverick",
    imgSrc: "images/maverick.png",
    projectLink: "https://www.akn-maverick.netlify.app",
    tech: ["React JS", "Typescript", "SCSS & CSS", "EmailJS"],
    description:
      "This website serves as a gateway to a wide array of cutting-edge solutions designed to address real-world challenges across diverse industries.",
    modalContent: (
      <>
        <p>
          This website serves as a gateway to a wide array of cutting-edge
          solutions designed to address real-world challenges across diverse
          industries.
        </p>
        <p>
          {
            "From the moment you land on the homepage, you'll be greeted by a sleek and intuitive design that exudes professionalism and confidence. The website showcases a deep understanding of client needs, presenting a range of solutions tailored to meet specific requirements."
          }
        </p>
        <p>
          Embrace the power of possibilities as you explore this website and
          unlock a world of transformative solutions.
        </p>
      </>
    ),
  },
  {
    title: "Itis",
    imgSrc: "/images/itis.png",
    projectLink: "https://www.akn-itis.netlify.app",
    tech: ["React JS", "Javascript", "Firebase", "SCSS & CSS", "EmailJS"],
    description:
      "Fully functional food delivery platform designed to cater to your cravings, offering a wide array of mouthwatering meals that can be easily searched, added to your cart, and seamlessly ordered for a delightful dining experience.",
    modalContent: (
      <>
        <p>
          Fully functional exceptional platform designed to cater to your
          cravings, offering a wide array of mouthwatering meals that can be
          easily searched, added to your cart, and seamlessly ordered for a
          delightful dining experience.
        </p>
        <p>
          The real-time price calculation feature ensures transparency and
          allows you to stay within your budget.
        </p>
        <p>
          {
            "The web application offers ability to pay via paystack's multiple options, providing flexibility and convenience"
          }
        </p>
      </>
    ),
  },
];
