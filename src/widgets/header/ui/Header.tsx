import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../shared/assets/snapedit_1763204574005 1.png";
import whatsapp from "../../../shared/assets/whatsapp.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Drawer } from "../../../shared/ui/Drawer/Drawer";
import { RegisterDrawer } from "../../../features/Authorization/ui/RegisterDrawer/RegisterDrawer";
import { LoginDrawer } from "../../../features/Authorization/ui/LoginDrawer/LoginDrawer";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [animate, setAnimate] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // login / register drawers
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={className}>
      {isSticky && <div className={styles.placeholder}></div>}

      {/* LOGIN DRAWER */}
      <LoginDrawer
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      {/* REGISTER DRAWER */}
      <RegisterDrawer
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <div className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Lingva Logo"
            className={`${styles.header__logo} ${animate ? styles.fadeIn : ""}`}
          />
        </Link>

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
            style={{ animationDelay: "0.3s" }}
          >
            <button className={styles.link} onClick={() => setDrawerOpen(true)}>
              Контакты
            </button>
          </Link>

          <Link
            to={"/courses"}
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
            to={"/certification"}
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
            Каталог
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

          {/* ВОЙТИ — открывает LoginDrawer */}
          <button
            className={`${styles.button} ${animate ? styles.fadeIn : ""}`}
            style={{ animationDelay: "1s" }}
            onClick={() => setIsLoginOpen(true)}
          >
            Войти
          </button>
        </div>

        {/* BURGER */}
        <button
          className={`${styles.burger} ${animate ? styles.fadeIn : ""}`}
          onClick={toggleMenu}
          style={{ animationDelay: "0.4s" }}
        >
          <Menu className={styles.menu} size={35} />
        </button>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
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

              <Link to="#" onClick={toggleMenu}>
                <button
                  className={styles.link}
                  onClick={() => setDrawerOpen(true)}
                >
                  Контакты
                </button>
              </Link>

              <Link to="/courses" onClick={toggleMenu}>
                Курсы
              </Link>
              <Link to="/" onClick={toggleMenu}>
                Стажировка
              </Link>
              <Link to="/certification" onClick={toggleMenu}>
                Сертификация
              </Link>
              <Link to="/shop" onClick={toggleMenu}>
                Каталог
              </Link>

              <Link to="/" onClick={toggleMenu}>
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className={styles.whatsapp}
                />
              </Link>

              {/* ВОЙТИ В МЕНЮ — тоже открывает LoginDrawer */}
              <button
                className={styles.button}
                onClick={() => {
                  toggleMenu();
                  setIsLoginOpen(true);
                }}
              >
                Войти
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Контакты Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};
