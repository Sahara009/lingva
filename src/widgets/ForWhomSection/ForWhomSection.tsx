import { motion } from "framer-motion";
import { Book, Globe2, Users } from "lucide-react";
import style from "./ForWhomSection.module.scss";

export default function ForWhomSection() {
  const items = [
    {
      icon: <Book />, // размеры задаём в scss
      title: "Студентам",
      text: "Подходит для тех, кто хочет изучать языки с нуля или улучшить свой уровень языка",
      color: "var(--pastel-blue)",
    },
    {
      icon: <Globe2 />,
      title: "Путешественникам",
      text: "Идеально для тех, кто путешествует и хочет по-настоящему прочувствовать культуру других стран.",
      color: "var(--pastel-yellow)",
    },
    {
      icon: <Users />,
      title: "Преподавателям",
      text: "Материалы, методическая база и партнёрские программы для школ и учителей.",
      color: "var(--pastel-green)",
    },
  ];

  return (
    <section className={style.for_whom_section}>
      <div className={style.container}>
        <h2>Кому подходит наша платформа</h2>

        <div className={style.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={style.card}
              //   style={{ backgroundColor: item.color }}
            >
              <div className={style.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
