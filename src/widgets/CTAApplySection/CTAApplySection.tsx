import { motion } from "framer-motion";
import styles from "./CTAApplySection.module.scss";

export const CTAApplySection = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>
          Готовы отправиться на языковую стажировку?
        </h2>

        <p className={styles.subtitle}>
          Оставьте контакты — мы свяжемся с вами и подберём программу под ваши
          цели.
        </p>

        <form className={styles.form}>
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="Телефон" />
          <input type="email" placeholder="E-mail" />
          <button type="submit">Отправить заявку</button>
        </form>
      </motion.div>
    </section>
  );
};
