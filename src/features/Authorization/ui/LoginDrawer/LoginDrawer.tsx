import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./LoginDrawer.module.scss";

interface LoginDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export const LoginDrawer: React.FC<LoginDrawerProps> = ({
  isOpen,
  onClose,
  onSwitchToRegister,
}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const isMobile = window.innerWidth <= 768;

  const handleLogin = () => {
    if (!email.trim() || !pass.trim()) {
      alert("Заполните все поля!");
      return;
    }

    alert(`Вход выполнен!\nEmail: ${email}`);
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

          {/* DESKTOP */}
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

              <h2 className={styles.title}>Войти</h2>

              <motion.div
                custom={0}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.field}
              >
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              <motion.div
                custom={1}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.field}
              >
                <label>Пароль</label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </motion.div>

              <motion.button
                custom={2}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.submit}
                onClick={handleLogin}
              >
                Войти
              </motion.button>

              {/* ССЫЛКА ПЕРЕКЛЮЧЕНИЯ */}
              <motion.p
                custom={3}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.switch}
                onClick={onSwitchToRegister}
              >
                Нет аккаунта? <span>Зарегистрироваться</span>
              </motion.p>
            </motion.div>
          )}

          {/* MOBILE SHEET */}
          {isMobile && (
            <motion.div
              className={styles.sheet}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className={styles.sheetHandle} />
              <h2 className={styles.title}>Войти</h2>

              <motion.div
                custom={0}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.field}
              >
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              <motion.div
                custom={1}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.field}
              >
                <label>Пароль</label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </motion.div>

              <motion.button
                custom={2}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.submit}
                onClick={handleLogin}
              >
                Войти
              </motion.button>

              <motion.p
                custom={3}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.switch}
                onClick={onSwitchToRegister}
              >
                Нет аккаунта? <span>Зарегистрироваться</span>
              </motion.p>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
