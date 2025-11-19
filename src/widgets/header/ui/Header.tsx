import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../shared/assets/snapedit_1763204574005 1.png";
import whatsapp from "../../../shared/assets/whatsapp.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [animate, setAnimate] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={className}>
      <div className={styles.header}>
        <img
          src={logo}
          alt="Lingva Logo"
          className={`${styles.header__logo} ${animate ? styles.fadeIn : ""}`}
        />
        <nav
          className={`${styles.list} ${animate ? styles.fadeIn : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            to={"/"}
            className={`${styles.link} ${animate ? styles.fadeIn : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            Главная
          </Link>
          <Link
            to={"/"}
            className={`${styles.link} ${animate ? styles.fadeIn : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            Курсы
          </Link>
          <Link
            to={"/"}
            className={`${styles.link} ${animate ? styles.fadeIn : ""}`}
            style={{ animationDelay: "0.5s" }}
          >
            Стажировка
          </Link>
          <Link
            to={"/"}
            className={`${styles.link} ${animate ? styles.fadeIn : ""}`}
            style={{ animationDelay: "0.6s" }}
          >
            Сертификация
          </Link>
          <Link
            to={"/"}
            className={`${styles.link} ${animate ? styles.fadeIn : ""}`}
            style={{ animationDelay: "0.7s" }}
          >
            Магазин
          </Link>
        </nav>
        <div
          className={`${styles.buttons} ${animate ? styles.fadeIn : ""}`}
          style={{ animationDelay: "0.8s" }}
        >
          <Link to={"/"}>
            <img
              src={whatsapp}
              alt="whatsapp"
              className={`${styles.whatsapp} ${animate ? styles.fadeIn : ""}`}
              style={{ animationDelay: "0.9s" }}
            />
          </Link>
          <button
            className={`${styles.button} ${animate ? styles.fadeIn : ""}`}
            style={{ animationDelay: "1s" }}
          >
            Войти
          </button>
        </div>
        <button
          className={`${styles.burger} ${animate ? styles.fadeIn : ""}`}
          onClick={toggleMenu}
          style={{ animationDelay: "0.4s" }}
        >
          <Menu className={styles.menu} size={35} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.fullScreenMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeButton} onClick={toggleMenu}>
              <X size={32} />
            </button>
            <nav className={styles.mobileNav}>
              <Link to="/" onClick={toggleMenu}>
                Главная
              </Link>
              <Link to="/" onClick={toggleMenu}>
                Курсы
              </Link>
              <Link to="/" onClick={toggleMenu}>
                Стажировка
              </Link>
              <Link to="/" onClick={toggleMenu}>
                Сертификация
              </Link>
              <Link to="/" onClick={toggleMenu}>
                Магазин
              </Link>
              <Link to="/" onClick={toggleMenu}>
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className={styles.whatsapp}
                />
              </Link>
              <button className={styles.button} onClick={toggleMenu}>
                Войти
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
