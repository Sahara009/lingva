import { motion } from "framer-motion";
import styles from "./IntershipReviews.module.scss";

const reviews = [
  {
    name: "Алина",
    country: "Оман",
    text: "Поехала одна — вернулась с новым уровнем языка и кучей друзей. Страшно было только в первый день. Дальше — кайф!",
    avatar: "/img/reviews/alina.jpg",
  },
  {
    name: "Мухаммад",
    country: "Иордания",
    text: "Арабский стал живым. Каждый день практика, учителя — носители, атмосфера потрясающая.",
    avatar: "/img/reviews/muhammad.jpg",
  },
  {
    name: "София",
    country: "Турция",
    text: "Очень тёплая страна, интересная культура! Я улучшила язык намного быстрее, чем ожидала.",
    avatar: "/img/reviews/sofia.jpg",
  },
];

export const IntershipReviews = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Отзывы студентов
      </motion.h2>

      <motion.div
        className={styles.carousel}
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
      >
        {reviews.map((r, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={r.avatar} alt={r.name} className={styles.avatar} />
            <div className={styles.info}>
              <h3>{r.name}</h3>
              <span className={styles.country}>{r.country}</span>
            </div>
            <p className={styles.text}>{r.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
