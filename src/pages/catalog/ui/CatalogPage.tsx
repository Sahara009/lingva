import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ShoppingCart, FileText, ExternalLink } from "lucide-react";
import styles from "./CatalogPage.module.scss";

export const CatalogPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <section className={styles.header}>
          <motion.h1
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Каталог
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Полезные материалы для изучения иностранных языков
          </motion.p>
        </section>

        {/* Block 1: Книги */}
        <section className={styles.catalogBlock}>
          <div className={styles.blockHeader}>
            <BookOpen className={styles.blockIcon} />
            <h2>Книги</h2>
          </div>
          <div className={styles.blockContent}>
            <p>Учебники и книги по изучению иностранных языков</p>
            <a
              href="https://www.wildberries.ru"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.catalogLink}
            >
              Перейти в каталог <ExternalLink size={18} />
            </a>
          </div>
        </section>

        {/* Block 2: Книги на заказ из-за границы */}
        <section className={styles.catalogBlock}>
          <div className={styles.blockHeader}>
            <ShoppingCart className={styles.blockIcon} />
            <h2>Книги на заказ из-за границы</h2>
          </div>
          <div className={styles.blockContent}>
            <div className={styles.orderInfo}>
              <p>
                Мы можем привезти книги и учебники по изучению иностранных
                языков на заказ из-за границы.
              </p>
              <ul className={styles.conditionsList}>
                <li>
                  Минимальная сумма заказа — 10 000 рублей (стоимость доставки
                  не включена)
                </li>
                <li>Срок доставки до Москвы составляет примерно 3–4 недели</li>
              </ul>
              <p>
                Если вы хотите оформить заказ и согласны с условиями, напишите
                нам. Мы рассчитаем итоговую стоимость и проконсультируем вас по
                всем вопросам.
              </p>
              <p className={styles.catalogNote}>
                Ознакомьтесь с нашим каталогом:
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.catalogLink}
              >
                Ссылка на каталог (Яндекс Диск) <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Block 3: Гайды */}
        <section className={styles.catalogBlock}>
          <div className={styles.blockHeader}>
            <FileText className={styles.blockIcon} />
            <h2>Гайды</h2>
          </div>
          <div className={styles.blockContent}>
            <div className={styles.comingSoon}>
              <p>
                Скоро здесь появятся полезные гайды по изучению языков и
                поступлению в зарубежные вузы.
              </p>
              <span className={styles.stayTuned}>Следите за обновлениями!</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
