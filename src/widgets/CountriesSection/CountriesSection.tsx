import { motion } from "framer-motion";
import styles from "./CountriesSection.module.scss";

const countries = [
  {
    id: 1,
    name: "Иордания",
    bg: "jordan.jpg",
    description:
      "Погружение в арабскую культуру, обучение с опытными преподавателями и насыщенная городская атмосфера Аммана.",
    date: "Ближайший набор: март — июнь 2025",
    price: "от 1200$",
    accent: "#0e668d", // розовый пастель
  },
  {
    id: 2,
    name: "Оман",
    bg: "oman.jpg",
    description:
      "Спокойная атмосфера, качественные языковые школы и уникальное культурное наследие страны.",
    date: "Ближайший набор: май — август 2025",
    price: "от 1500$",
    accent: "#0e668d", // нейтральный белый
  },
  {
    id: 3,
    name: "Турция",
    bg: "turkey.jpg",
    description:
      "Современные учебные центры, доступные программы и динамичная среда для ежедневной практики.",
    date: "Ближайший набор: февраль — май 2025",
    price: "от 900$",
    accent: "#0e668d", // голубой пастель
  },
];

export const CountriesSection = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Страны стажировок
      </motion.h2>

      <div className={styles.list}>
        {countries.map((country, index) => (
          <motion.div
            key={country.id}
            className={styles.card}
            style={{ backgroundColor: country.accent }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(/images/countries/${country.bg})`,
              }}
            />

            <div className={styles.content}>
              <h3>{country.name}</h3>
              <p>{country.description}</p>

              <div className={styles.info}>
                <span>{country.date}</span>
                <span className={styles.price}>{country.price}</span>
              </div>

              <button className={styles.button}>Подробнее</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
