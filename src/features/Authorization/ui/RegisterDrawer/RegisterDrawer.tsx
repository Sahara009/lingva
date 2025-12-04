import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./RegisterDrawer.module.scss";

interface RegisterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export const RegisterDrawer: React.FC<RegisterDrawerProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const isMobile = window.innerWidth <= 768;

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !pass.trim() || !repeatPass.trim()) {
      alert("Заполните все поля!");
      return;
    }

    if (pass !== repeatPass) {
      alert("Пароли не совпадают!");
      return;
    }

    alert(`Регистрация успешна!\nИмя: ${name}\nEmail: ${email}`);
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
          {/* Overlay */}
          <motion.div
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          />

          {/* Desktop Drawer */}
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

              <h2 className={styles.title}>Регистрация</h2>

              {[
                { label: "Имя", value: name, setter: setName },
                { label: "Email", value: email, setter: setEmail },
                {
                  label: "Пароль",
                  value: pass,
                  setter: setPass,
                  password: true,
                },
                {
                  label: "Повторите пароль",
                  value: repeatPass,
                  setter: setRepeatPass,
                  password: true,
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

                  <input
                    type={field.password ? "password" : "text"}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                  />
                </motion.div>
              ))}

              <motion.button
                custom={4}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.submit}
                onClick={handleRegister}
              >
                Зарегистрироваться
              </motion.button>

              <motion.p
                custom={5}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.switch}
                onClick={onSwitchToLogin}
              >
                Уже есть аккаунт? <span>Войти</span>
              </motion.p>
            </motion.div>
          )}

          {/* Mobile Bottom Sheet */}
          {isMobile && (
            <motion.div
              className={styles.sheet}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className={styles.sheetHandle} />

              <h2 className={styles.title}>Регистрация</h2>

              {[
                { label: "Имя", value: name, setter: setName },
                { label: "Email", value: email, setter: setEmail },
                {
                  label: "Пароль",
                  value: pass,
                  setter: setPass,
                  password: true,
                },
                {
                  label: "Повторите пароль",
                  value: repeatPass,
                  setter: setRepeatPass,
                  password: true,
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

                  <input
                    type={field.password ? "password" : "text"}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                  />
                </motion.div>
              ))}

              <motion.button
                custom={4}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.submit}
                onClick={handleRegister}
              >
                Зарегистрироваться
              </motion.button>

              <motion.p
                custom={5}
                variants={anim}
                initial="hidden"
                animate="visible"
                className={styles.switch}
                onClick={onSwitchToLogin}
              >
                Уже есть аккаунт? <span>Войти</span>
              </motion.p>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};
