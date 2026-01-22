import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./Drawer.module.scss";

import whatsapp from "../../assets/whatsapp.svg";
import telegramm from "../../assets/telegamIoc.svg";
import wildberries from "../../assets/wildberries-sign-logo.svg";

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

const SocialIcons = () => (
  <div className={styles.socials}>
    {[whatsapp, telegramm, wildberries].map((icon, i) => (
      <motion.a
        key={i}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        custom={i}
        variants={iconsAnim}
        initial="hidden"
        animate="visible"
      >
        <img className={styles.iconsMAR} src={icon} alt="icon" />
      </motion.a>
    ))}
  </div>
);

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const isMobile = window.innerWidth <= 768;

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !comment.trim()) {
      alert("Заполните все поля!");
      return;
    }
    alert(`Имя: ${name}\nEmail: ${email}\nКомментарий: ${comment}`);
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
              >
                Отправить
              </motion.button>

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
              >
                Отправить
              </motion.button>

              {/* 🔗 ИКОНКИ В КОНЦЕ */}
              <SocialIcons />
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
