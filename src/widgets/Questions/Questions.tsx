import React, { useState } from "react";
import styles from "./Questions.module.scss";

interface Props {
  className?: string;
}

const faq = [
  {
    q: "Как проходит обучение?",
    a: "Вы выбираете язык и уровень, на котором хотите обучаться. Мы добавляем вас в группу соответствующего уровня и направляем ссылку на онлайн-уроки, а также все необходимые учебные материалы.",
  },
  {
    q: "Как определить свой уровень языка?",
    a: "Если вы уже изучали язык, мы предлагаем пройти онлайн-тестирование на нашей платформе, которое поможет определить ваш текущий уровень владения языком.",
  },
  {
    q: "Нужно ли знать язык заранее?",
    a: "Нет, это не обязательно. Мы предлагаем обучение на всех уровнях — от начального до продвинутого.",
  },
  {
    q: "Что входит в программу стажировки?",
    a: "Программа стажировки включает языковые занятия, культурные мероприятия и экскурсии.",
  },
];

export const Questions: React.FC<Props> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className={className}>
      <div className={styles.questions}>
        <h2>
          Часто <br />
          задаваемые
          <br /> вопросы
        </h2>

        <div className={styles.faq}>
          {faq.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.question} onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className={styles.arrow}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>

              <div
                className={`${styles.answer} ${
                  openIndex === i ? styles.open : ""
                }`}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
