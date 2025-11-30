import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./JourneyMap.module.scss";
import {
  BookOpen,
  CheckCircle,
  Compass,
  Globe2,
  GraduationCap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <BookOpen />,
    title: "Выбор языка",
    text: "Определите язык, уровень и формат обучения.",
  },
  {
    icon: <Compass />,
    title: "Демо или тест",
    text: "Пройдите демо-занятие или определите уровень.",
  },
  {
    icon: <GraduationCap />,
    title: "Онлайн-курс",
    text: "Начните обучение на удобной платформе.",
  },
  {
    icon: <CheckCircle />,
    title: "Сертификация",
    text: "Сдайте экзамен и получите официальный сертификат.",
  },
  {
    icon: <Globe2 />,
    title: "Стажировка",
    text: "Углубите знания за рубежом в среде носителей.",
  },
];

const positions = [
  { top: "150px", left: "10%", rotate: "-5deg" },
  { top: "400px", left: "75%", rotate: "8deg" },
  { top: "700px", left: "35%", rotate: "-3deg" },
  { top: "1100px", left: "55%", rotate: "5deg" },
  { top: "1500px", left: "25%", rotate: "-7deg" },
];

export const JourneyMapSection: React.FC = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      console.log(pathLength);

      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1,
        scrollTrigger: {
          trigger: pathRef.current,
          start: "top 30%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className={style.jorney}>
      <div className={style.stepsContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={style.step}
            style={{ top: positions[index].top, left: positions[index].left }}
          >
            <div className={style.icon}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <div className={style.svg}>
        <svg
          width="1115"
          height="2042"
          viewBox="0 0 1115 2042"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M529.606 10C529.606 10 367.745 329.16 437.123 482.057C536.188 700.379 984.461 459.035 1083 677.602C1245.97 1039.07 -8.29428 1467.93 10.2023 1108.92C28.6988 749.913 1105 1077.35 1105 1505.61C1105 1933.88 146.677 1319.74 97.1862 1704.21C47.6954 2088.68 625.588 2028.59 625.588 2028.59"
            stroke="#83ACFF"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
