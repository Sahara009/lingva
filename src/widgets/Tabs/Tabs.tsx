import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Запускаем анимацию потухания
      setTimeout(() => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length); // Меняем иконку
        setFadeOut(false); // Запускаем анимацию появления
      }, 500); // Длительность потухания
    }, 2000); // Меняем иконку каждые 2 секунды

    return () => clearInterval(interval); // Очищаем таймер при размонтировании
  }, []);

  return (
    <div className={className}>
      <div className={style.tabs}>
        <div className={style.tabs__first}>
          <h3>1234</h3>
          <p>учеников прошли обучение нашей школе</p>
        </div>
        <div className={style.tabs__two}>
          <h3>10+</h3>
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
