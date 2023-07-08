import { useEffect, useState } from "react";
import styles from "./DotGrid.module.scss";
import anime from "animejs";

export const DotGrid = () => {
  const [dotColor, setDotColor] = useState<string>("");
  const [brandColor, setBrandColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");
  const [rotateValue, setRotateValue] = useState<number>(180);

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

    handleDotClick(brandColor, "0");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDotClick = async (color: string, e?: any) => {
    if (rotateValue === -90) {
      setRotateValue(180);
    } else {
      setRotateValue(-90);
    }
    anime({
      targets: ".dot-point",
      background: color,
      scale: [
        {
          value: 1.35,
          easing: "easeOutSine",
          duration: 1200,
        },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      rotate: [{ value: rotateValue, easing: "easeOutSine", duration: 1200 }],
      opacity: [
        { value: 0.5, easing: "easeOutSine", duration: 1200 },
        { value: 0.2, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e?.target?.dataset.index,
      }),
      loopBegin: () => {
        if (color === textColor) {
          setDotColor(brandColor);
        } else if (color === brandColor) {
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
          onClick={async (e) => {
            handleDotClick(dotColor, e);
          }}
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
