import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Values.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export const Values: React.FC<Props> = ({ className }) => {
  const valuesRef = useRef<HTMLDivElement>(null);
  // const animationTriggered = useRef(false);

  useEffect(() => {
    const element = valuesRef.current;

    if (element) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom", // Начало анимации
          once: true, // Сработает только один раз
          onEnter: () => {
            gsap.fromTo(
              element,
              { scale: 0.5, opacity: 0 }, // Начальные значения
              {
                scale: 1, // Конечное значение
                opacity: 1,
                duration: 1,
              }
            );
          },
        },
      });
      console.log(tl);
    }
  }, []);

  return (
    <div className={className}>
      <div className={styles.values} ref={valuesRef}>
        <div className={styles.content}>
          <h2>Ценности</h2>
          <p>
            Для нас главное: порядочность и человечность. Мы стараемся быть
            внимательными к каждому человеку, уважать мнение других и постоянно
            развиваться. Это касается не только работы c клиентами, но и общения
            внутри команды. Мы искренне верим, что невозможного не существует.
            Поэтому не боимся мечтать, пробовать новое и двигаться вперёд. Когда
            мы работаем вместе, c душой и полной отдачей, случаются настоящие
            чудеса. И это только начало.
          </p>
        </div>
      </div>
    </div>
  );
};
