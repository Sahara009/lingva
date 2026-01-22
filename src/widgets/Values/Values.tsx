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
            Для нас важно, чтобы изучение языка было лёгким и доступным для
            каждого. Мы понимаем, что изучение языка — это не только
            онлайн-уроки, но и самостоятельная практика. Поэтому мы предлагаем
            комплексное сопровождение: онлайн-курсы, учебные материалы и
            языковые стажировки, чтобы каждый мог пройти весь путь изучения
            языка от первых шагов до уверенного владения.
          </p>
        </div>
      </div>
    </div>
  );
};
