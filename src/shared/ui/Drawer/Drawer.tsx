import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./Drawer.module.scss";
import { sendApplicationEmail } from "../../../lib/emailService";

import whatsapp from "../../assets/whatsapp.svg";
import telegramm from "../../assets/telegamIoc.svg";
import wildberries from "../../assets/wildberries-sign-logo.svg";
import instagramm from "../../assets/icons8-instagram.svg";
import email from "../../assets/mail-black-envelope-symbol_icon-icons.com_56519.svg";
import vkontakte from "../../assets/icons8-vk.svg";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconsAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.1 },
  }),
};

const socialLinks = [
  { icon: whatsapp, href: "https://wa.me/79273601138" },
  { icon: telegramm, href: "https://t.me/bibliotekalingvaru" },
  { icon: wildberries, href: "https://www.wildberries.ru/seller/1144265" },
  {
    icon: instagramm,
    href: "https://www.instagram.com/biblioteka.lingva?igsh=MWIwYXd5dHVndm5y",
  },
  {
    icon: vkontakte,
    href: "https://vk.com/id1108142845",
  },
  { icon: email, href: "mailto:bibliotekalingva@gmail.com" },
];

const SocialIcons = () => (
  <div className={styles.socials}>
    {socialLinks.map((item, i) => (
      <motion.a
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        custom={i}
        variants={iconsAnim}
        initial="hidden"
        animate="visible"
      >
        <img className={styles.iconsMAR} src={item.icon} alt="icon" />
      </motion.a>
    ))}
  </div>
);

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isMobile = window.innerWidth <= 768;

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !comment.trim()) {
      alert("Заполните все поля!");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      await sendApplicationEmail({
        name,
        email,
        message: comment,
      });
      setStatus("success");
      setName("");
      setEmail("");
      setComment("");
    } catch (error) {
      setStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const anim = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.13 },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ФОН */}
          <motion.div
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          />

          {/* ДЛЯ DESKTOP — DRAWER СПРАВА */}
          {!isMobile && (
            <motion.div
              className={styles.drawer}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              <button className={styles.close} onClick={onClose}>
                ✕
              </button>

              <h2 className={styles.title}>Связаться с нами</h2>

              {/* поля */}
              {[
                { label: "Имя", value: name, setter: setName },
                { label: "Email", value: email, setter: setEmail },
                {
                  label: "Комментарий",
                  value: comment,
                  setter: setComment,
                  textarea: true,
                },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={anim}
                  initial="hidden"
                  animate="visible"
                  className={styles.field}
                >
                  <label>{field.label}</label>

                  {field.textarea ? (
                    <textarea
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                    />
                  ) : (
                    <input
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                custom={3}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.submit}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </motion.button>

              {status === "success" && (
                <p className={styles.successMessage}>
                  Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в
                  ближайшее время.
                </p>
              )}

              {status === "error" && (
                <p className={styles.errorMessage}>
                  Произошла ошибка при отправке заявки. Пожалуйста, попробуйте
                  ещё раз.
                </p>
              )}

              {/* 🔗 ИКОНКИ В КОНЦЕ */}
              <SocialIcons />
            </motion.div>
          )}

          {/* 📱 MOBILE — BOTTOM SHEET */}
          {isMobile && (
            <motion.div
              className={styles.sheet}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className={styles.sheetHandle} />

              <h2 className={styles.title}>Написать нам</h2>

              {[
                { label: "Имя", value: name, setter: setName },
                { label: "Email", value: email, setter: setEmail },
                {
                  label: "Комментарий",
                  value: comment,
                  setter: setComment,
                  textarea: true,
                },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={anim}
                  initial="hidden"
                  animate="visible"
                  className={styles.field}
                >
                  <label>{field.label}</label>

                  {field.textarea ? (
                    <textarea
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                    />
                  ) : (
                    <input
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                custom={3}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.submit}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </motion.button>

              {status === "success" && (
                <p className={styles.successMessage}>
                  Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в
                  ближайшее время.
                </p>
              )}

              {status === "error" && (
                <p className={styles.errorMessage}>
                  Произошла ошибка при отправке заявки. Пожалуйста, попробуйте
                  ещё раз.
                </p>
              )}

              {/* 🔗 ИКОНКИ В КОНЦЕ */}
              <SocialIcons />
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
