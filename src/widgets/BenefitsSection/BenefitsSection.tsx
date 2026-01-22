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
    title: "Совершенствование языка",
    text: "Практикуя язык и получая новые знания, вы развиваете свои языковые навыки и становитесь более уверенными в общении.",
    emoji: <SquareChevronRight size={60} />,
  },
  {
    title: "Общение с людьми",
    text: "Каждая стажировка — это маленькое путешествие, а каждое путешествие дарит новые знакомства и друзей, которые открывают для вас мир и новые возможности.",
    emoji: <Handshake size={60} />,
  },
  {
    title: "Уверенность в языке",
    text: "По завершении программы каждый студент получает официальный сертификат, подтверждающий участие и достигнутые успехи в изучении языка.",
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
