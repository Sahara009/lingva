import React, { useEffect, useRef, useState } from "react";
import style from "./Tabs.module.scss";
import { Laptop, Microwave, Smartphone } from "lucide-react";

interface Props {
  className?: string;
}

const icons = [
  {
    component: <Smartphone size={60} color="#0e668d" />,
    label: "доступ к платформе с любого устройства",
  },
  {
    component: <Laptop size={60} color="#0e668d" />,
    label: "доступ к платформе с любого устройства",
  },
  {
    component: <Microwave size={60} color="#0e668d" />,
    label: "доступ к платформе с любого устройства",
  },
];

export const Tabs: React.FC<Props> = ({ className }) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // === COUNTERS ===
  // const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0); // 10

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          // animateCounter(0, 1234, 1500, setStudents);
          animateCounter(0, 10, 1200, setTeachers);
        }
      },
      { threshold: 0.4 } // запуск когда 40% секции видно
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCounter = (
    start: number,
    end: number,
    duration: number,
    setter: (value: number) => void
  ) => {
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(start + (end - start) * progress);
      setter(value);

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  // === ICON ROTATION ===
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        setFadeOut(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className} ref={sectionRef}>
      <div className={style.tabs}>
        <div className={style.tabs__first}>
          <h3>Большая</h3>
          <p>
            команда квалифицированных специалистов с опытом работы в
            международной сфере.
          </p>
        </div>

        <div className={style.tabs__two}>
          <h3>{teachers}+</h3>
          <p>опытных преподавателей</p>
        </div>

        <div className={style.tabs__three}>
          <div>
            <p>комьюнити, которое поддержит</p>
          </div>
          <div>
            <p>только интерактивные занятия и уроки</p>
          </div>
        </div>

        <div className={style.tabs__four}>
          <div
            className={`${style.iconContainer} ${fadeOut ? style.fadeOut : ""}`}
          >
            {icons[currentIconIndex].component}
          </div>
          <p>{icons[currentIconIndex].label}</p>
        </div>
      </div>
    </div>
  );
};
