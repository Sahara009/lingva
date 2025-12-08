import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQSection.module.scss";

const faqs = [
  {
    q: "Какие требования для участия в стажировке?",
    a: "Достаточный уровень языка (A2–B1), заполненная анкета и действующий загранпаспорт. Возраст — от 16 лет.",
  },
  {
    q: "Сколько длится программа?",
    a: "Обычно 2–4 недели. Есть интенсивы на 7–10 дней и расширенные программы до 2 месяцев.",
  },
  {
    q: "Что входит в стоимость?",
    a: "Обучение, проживание, учебные материалы, куратор на месте. Перелёт — по желанию студента.",
  },
  {
    q: "Помогаете ли вы с визой?",
    a: "Да. Мы сопровождаем процесс полностью: консультация, подготовка документов, запись в визовый центр.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Часто задаваемые вопросы</h2>

      <div className={styles.list}>
        {faqs.map((item, i) => (
          <div key={i} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(i)}>
              {item.q}
              <motion.span
                className={styles.icon}
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className={styles.answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
