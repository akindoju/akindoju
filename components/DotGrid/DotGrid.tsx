import { useEffect, useState } from "react";
import styles from "./DotGrid.module.scss";
import anime from "animejs";

export const DotGrid = () => {
  const [dotColor, setDotColor] = useState<string>("");
  const [brandColor, setBrandColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");

  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;

  const dots = [];

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const brandColor = rootStyles.getPropertyValue("--brand");
    const textColor = rootStyles.getPropertyValue("--text");

    setDotColor(brandColor);
    setBrandColor(brandColor);
    setTextColor(textColor);
  }, []);

  const handleDotClick = async (e: any) => {
    anime({
      targets: ".dot-point",
      background: dotColor,
      scale: [
        {
          value: 1.35,
          easing: "easeOutSine",
          duration: 250,
        },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.5, easing: "easeOutSine", duration: 250 },
        { value: 0.15, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
      loopBegin: () => {
        if (dotColor === textColor) {
          setDotColor(brandColor);
        } else if (dotColor === brandColor) {
          setDotColor(textColor);
        }
      },
    });
  };

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className={
              dotColor === brandColor
                ? `${styles.dot_brand} dot-point`
                : `${styles.dot_text} dot-point`
            }
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
