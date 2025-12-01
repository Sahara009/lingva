import React from "react";
import {
  BookOpen,
  CheckCircle,
  Compass,
  Globe2,
  GraduationCap,
} from "lucide-react";
import style from "./JourneyMapMobile.module.scss";

const steps = [
  {
    icon: <BookOpen size={36} />,
    title: "Выбор языка",
    text: "Определите язык, уровень и формат обучения.",
  },
  {
    icon: <Compass size={36} />,
    title: "Демо или тест",
    text: "Пройдите демо-занятие или определите уровень.",
  },
  {
    icon: <GraduationCap size={36} />,
    title: "Онлайн-курс",
    text: "Начните обучение на удобной платформе.",
  },
  {
    icon: <CheckCircle size={36} />,
    title: "Сертификация",
    text: "Получите официальный сертификат.",
  },
  {
    icon: <Globe2 size={36} />,
    title: "Стажировка",
    text: "Практика за границей с носителями языка.",
  },
];

export const JourneyMapMobile: React.FC = () => {
  return (
    <div>
      <h2 className={style.mainTitle}>Путь студента</h2>
      <p className={style.subtitle}>
        От первого шага до стажировки за границей
      </p>
      <div className={style.mobileWrapper}>
        {steps.map((step, i) => (
          <div key={i} className={style.step}>
            <div className={style.icon}>{step.icon}</div>
            <div className={style.info}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
