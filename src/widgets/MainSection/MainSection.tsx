import React, { useEffect, useState } from "react";
import styles from "./MainSection.module.scss";
import { MoveUpRight } from "lucide-react";
import cat1 from "../../shared/assets/cat1.png";
import cat2 from "../../shared/assets/cat4.png";

interface Props {
  className?: string;
}

export const MainSection: React.FC<Props> = ({ className }) => {
  const [activeCat, setActiveCat] = useState(0);
  const [mounted, setMounted] = useState(false);
  const cats = [cat1, cat2];

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    const interval = setInterval(() => {
      setActiveCat((prev) => (prev === 0 ? 1 : 0));
    }, 1000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={className}>
      <div className={styles.mainSection}>
        <div
          className={`${styles.mainSection__text} ${
            mounted ? styles.appearText : ""
          }`}
        >
          <h1>
            Изучайте иностранные <br /> языки с <span>международной</span>
            <br />
            онлайн-академией!
          </h1>
          <p>
            «Библиотека Лингва» — образовательная платформа, объединяющая
            обучение языкам, профильную литературу и программы погружения за
            рубежом. Всё, что нужно для уверенного освоения языка — в одном
            месте.
          </p>
          <div className={styles.mainSection__buttons}>
            <button className={styles.mainSection__buttons_blue}>
              Узнать больше
            </button>
            <button className={styles.mainSection__buttons_red}>
              Подробнее <MoveUpRight className={styles.icon} />
            </button>
          </div>
        </div>

        <div
          className={`${styles.mainSection__photo} ${
            mounted ? styles.appearPhoto : ""
          }`}
        >
          <div className={styles.block}></div>

          <img
            key={activeCat}
            src={cats[activeCat]}
            alt="cat"
            className={`${styles.cat} ${styles.fadeCat}`}
          />
        </div>
      </div>
    </div>
  );
};
