import React, { useEffect, useState } from "react";
import styles from "./MainSection.module.scss";
import { MoveUpRight } from "lucide-react";
import cat1 from "../../shared/assets/cat1.png";
import cat2 from "../../shared/assets/cat4.png";
import main from "../../shared/assets/group-friends-enjoying-drinks-staircase (1).jpg";
import { FallingIcons } from "../../shared/ui/FallingIcons/FallingIcons";
import { Link } from "react-router-dom";

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
        <FallingIcons />
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
            обучение языкам, профильную литературу, программы языковых
            стажировок за рубежом и программы погружения за рубежом. Всё, что
            нужно для уверенного освоения языка — в одном месте.
          </p>
          <div className={styles.mainSection__buttons}>
            <Link to={"/courses"}>
              <button className={styles.mainSection__buttons_blue}>
                Подробнее <MoveUpRight className={styles.icon} />
              </button>{" "}
            </Link>{" "}
            <Link to={"/courses"}>
              <button className={styles.mainSection__buttons_red}>
                Наши курсы <MoveUpRight className={styles.icon} />
              </button>{" "}
            </Link>
          </div>
        </div>

        <div
          className={`${styles.mainSection__photo} ${
            mounted ? styles.appearPhoto : ""
          }`}
        >
          <img className={styles.block} src={main} alt="" />

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
