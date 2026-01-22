import { motion } from "framer-motion";
import styles from "./HowItWorks.module.scss";

const steps = [
  {
    id: 1,
    title: "Выбор языка",
    text: "Выбирите язык, по которому хотите пройти стажировку.",
  },
  {
    id: 2,
    title: "Консультация",
    text: "Наши специалисты предоставят вам подрубную информацию о программе и стране стажировки.",
  },
  {
    id: 3,
    title: "Регистрация",
    text: "Подайте заявку и наните готовиться к путешествию.",
  },
  {
    id: 4,
    title: "Стажировка",
    text: "Живые уроки с носителями языка, языковая практика и погружение в культуру страны.",
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
