import { motion } from "framer-motion";
import styles from "./CompareCountriesSection.module.scss";

type CountryComparison = {
  name: string;
  level: string;
  difficulty: string;
  price: string;
  climate: string;
  culture: string;
  housing: string;
};

const countries: CountryComparison[] = [
  {
    name: "Турция",
    level: "A1–C1",
    difficulty: "Средняя",
    price: "от 900$",
    climate: "Тёплый, средиземноморский",
    culture: "Динамичная, туристическая",
    housing: "Общежитие, апартаменты",
  },
  {
    name: "Иордания",
    level: "A1–C2",
    difficulty: "Высокая",
    price: "от 1200$",
    climate: "Сухой, жаркий летом",
    culture: "Традиционная арабская",
    housing: "Апартаменты, семьи",
  },
  {
    name: "Оман",
    level: "A2–C1",
    difficulty: "Средняя",
    price: "от 1500$",
    climate: "Жаркий, сухой",
    culture: "Спокойная, академическая",
    housing: "Апартаменты, гостевые дома",
  },
];

const headers = ["Параметр", "Турция", "Иордания", "Оман"];

export const CompareCountriesSection = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Сравнение стран стажировок
      </motion.h2>

      <motion.table
        className={styles.table}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            "level",
            "difficulty",
            "price",
            "climate",
            "culture",
            "housing",
          ].map((key, rowIndex) => (
            <tr key={rowIndex} className={styles.row}>
              <td className={styles.param}>
                {
                  {
                    level: "Уровень языка",
                    difficulty: "Сложность программы",
                    price: "Стоимость",
                    climate: "Средний климат",
                    culture: "Особенности культуры",
                    housing: "Форматы проживания",
                  }[key]
                }
              </td>
              {countries.map((c, i) => (
                <td key={i}>{c[key as keyof CountryComparison]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </motion.table>
    </section>
  );
};
