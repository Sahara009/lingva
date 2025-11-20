import React, { useState } from "react";
import styles from "./Countries.module.scss";
import jordan from "../../shared/assets/oman.png";
import oman from "../../shared/assets/jordan.png";
import turkiye from "../../shared/assets/turkiye.png";

interface Country {
  name: string;
  image: string;
}

const countries: Country[] = [
  { name: "Оман", image: oman },
  { name: "Иордания", image: jordan },
  { name: "Турция", image: turkiye },
];

export const Countries: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={styles.wrapper} onMouseMove={onMove}>
      <h2>Страны сотрудничевства</h2>
      <p>
        Хотите практиковать язык там, где он является частью повседневной жизни?
        Наши программы стажировок в <span>Иордании, Омане и Турции</span> дают
        возможность учиться через реальное общение и яркие культурные открытия.
      </p>
      <div className={styles.countries}>
        {countries.map((c) => (
          <div
            key={c.name}
            className={
              c.name === "Иордания" ? styles.countryJordan : styles.country
            }
            onMouseEnter={() => setActiveImage(c.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            {c.name}
          </div>
        ))}
      </div>
      {activeImage && (
        <img
          src={activeImage}
          className={styles.preview}
          style={{
            position: "fixed",
            left: pos.x + 20, // 👉 смещение по X
            top: pos.y + 20, // 👉 смещение по Y
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};
