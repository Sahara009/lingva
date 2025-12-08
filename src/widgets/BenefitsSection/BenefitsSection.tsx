import { motion } from "framer-motion";
import styles from "./BenefitsSection.module.scss";
import {
  Earth,
  Flame,
  Handshake,
  House,
  Speech,
  SquareChevronRight,
} from "lucide-react";

const benefits = [
  {
    title: "Живую языковую практику",
    text: "Вы ежедневно общаетесь с носителями языка и тренируете речь в реальных ситуациях.",
    emoji: <Speech size={60} />,
  },
  {
    title: "Погружение в культуру",
    text: "Вы изучаете традиции, быт, историю и мировоззрение страны проживания.",
    emoji: <Earth size={60} />,
  },
  {
    title: "Проживание и сопровождение",
    text: "Организация жилья, помощь на месте, кураторы и круглосуточная поддержка.",
    emoji: <House size={60} />,
  },
  {
    title: "Прогресс в 3–5 раз быстрее",
    text: "Старайтесь говорить ежедневно — результат заметен уже спустя пару недель.",
    emoji: <SquareChevronRight size={60} />,
  },
  {
    title: "Общение с людьми со всего мира",
    text: "В группах вы практикуете язык с иностранцами и находите новых друзей.",
    emoji: <Handshake size={60} />,
  },
  {
    title: "Уверенность в языке",
    text: "Вы перестаете бояться говорить и переходите на свободное общение.",
    emoji: <Flame size={60} />,
  },
];

export const BenefitsSection = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Что вы получите
      </motion.h2>

      <div className={styles.grid}>
        {benefits.map((b, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className={styles.emoji}>{b.emoji}</div>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
