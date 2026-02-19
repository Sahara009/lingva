import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CTAApplySection.module.scss";
import { sendApplicationEmail } from "../../lib/emailService";

export const CTAApplySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      await sendApplicationEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

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

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Комментарий"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Отправка..." : "Отправить заявку"}
          </button>

          {status === "success" && (
            <p className={styles.successMessage}>
              Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в
              ближайшее время.
            </p>
          )}

          {status === "error" && (
            <p className={styles.errorMessage}>
              Произошла ошибка при отправке заявки. Пожалуйста, попробуйте ещё
              раз.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};
