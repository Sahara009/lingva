import { motion } from "framer-motion";
import styles from "./HowItWorks.module.scss";

const steps = [
  {
    id: 1,
    title: "Выбор страны",
    text: "Определите направление: Иордания, Оман или Турция.",
  },
  {
    id: 2,
    title: "Консультация",
    text: "Мы поможем подобрать программу под ваш уровень и цели.",
  },
  {
    id: 3,
    title: "Погружение",
    text: "Обучение с носителями, экскурсии и настоящая языковая практика.",
  },
  {
    id: 4,
    title: "Сертификат",
    text: "По завершении — подтверждение уровня и рекомендации.",
  },
];

export const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Как это работает?
        </motion.h2>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <span className={styles.number}>{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
