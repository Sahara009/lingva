import React, { useState } from "react";
import styles from "./Questions.module.scss";

interface Props {
  className?: string;
}

const faq = [
  {
    q: "Как проходит обучение?",
    a: "Обучение строится на живой практике, погружении в языковую среду и общении с носителями.",
  },
  {
    q: "Нужно ли знать язык заранее?",
    a: "Нет. Программы адаптированы под любой уровень — от начального до продвинутого.",
  },
  {
    q: "Что входит в программу?",
    a: "Занятия, культурные экскурсии, консультации с наставником и поддержка на месте.",
  },
  {
    q: "Можно ли комбинировать страны?",
    a: "Да, при желании можно проходить стажировку сразу в двух странах.",
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
