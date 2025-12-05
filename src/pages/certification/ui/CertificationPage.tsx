import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Calendar, ArrowRight, Star } from "lucide-react";
import styles from "./CertificationPage.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const CertificationPage = () => {
  const pageRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const notesRef = useRef<(HTMLDivElement | null)[]>([]);

  const tasks = [
    "Официальное подтверждение уровня владения языком A1–C2.",
    "Доступные онлайн-экзамены для арабского, английского и турецкого.",
    "Международный сертификат, признаваемый образовательными центрами.",
    "Подтверждение уровня для работы, учёбы или иммиграции.",
    "Структурированный формат экзамена без стресса.",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Появление всей страницы
      gsap.from(pageRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
      });

      // Анимация секций
      sectionsRef.current.forEach((sec, i) => {
        if (sec) {
          gsap.from(sec, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
            },
          });
        }
      });

      // Анимация заметок
      // gsap.from(notesRef.current, {
      //   opacity: 0,
      //   y: -50,
      //   rotation: () => gsap.utils.random(-8, 8),
      //   duration: 0.8,
      //   stagger: 0.2,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: sectionsRef.current[1],
      //     start: "top 85%",
      //   },
      // });

      // Анимация CTA заголовков
      gsap.from(`.${styles.titleParallax}`, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.titleParallax}`,
          start: "top 90%",
        },
      });

      // Анимация кнопки CTA
      gsap.from(`.${styles.ctaButton}`, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: `.${styles.ctaButton}`,
          start: "top 90%",
        },
      });

      // Постоянная плавающая анимация для элементов header
      gsap.to(`.${styles.floatingElement}`, {
        y: "-=20",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.page} ref={pageRef}>
      <div className={styles.container}>
        {/* Header */}
        <section
          className={styles.header}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          {/* Визуальные элементы */}
          <div className={styles.floatingElements}>
            <span className={`${styles.floatingElement} ${styles.heart}`}>
              <Star color="#0e668d" />
            </span>
            <span className={`${styles.floatingElement} ${styles.star}`}>
              <Star color="#0e668d" />
            </span>

            <span className={`${styles.floatingElement} ${styles.heart}`}>
              <Star color="#0e668d" />
            </span>
          </div>

          {/* Заголовок с пульсацией */}
          <motion.h1
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Сертификация владения языком
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Онлайн-экзамен и сертификат международного образца по арабскому,
            английскому и турецкому языкам — уровни A1–C2.
          </motion.p>
        </section>

        {/* Sticky Notes Section */}
        <h2 className={styles.tasks__title}>
          Какие задачи решает сертификация?
        </h2>
        <section
          className={styles.stickyNotesSection}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {tasks.map((task, i) => (
            <div
              key={i}
              className={styles.taskNote}
              ref={(el) => (notesRef.current[i] = el)}
              style={
                {
                  "--rotate": `${gsap.utils.random(-5, 5)}deg`,
                } as React.CSSProperties
              }
            >
              <div className={styles.pin}></div>
              <p>{task}</p>
            </div>
          ))}
        </section>

        {/* Why it matters */}
        <div className={`${styles.card} cardAnim`}>
          <h2>Почему это актуально</h2>
          <p>
            Во многих странах Ближнего Востока и Европы требуется официальный
            сертификат уровня. Мы предлагаем удобный онлайн-формат,
            разработанный профессиональными методистами.
          </p>
        </div>

        {/* Exam Format */}
        <section
          className={styles.examFormat}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Формат экзамена</h2>
          <ul>
            <li>• Экзамен полностью проходит онлайн.</li>
            <li>
              • Проверяются навыки чтения, письма, говорения и аудирования.
            </li>
            <li>• Продолжительность: 60–90 минут.</li>
            <li>• Автоматическая выдача сертификата.</li>
          </ul>
        </section>

        {/* Sample Certificates */}
        <section
          className={styles.samples}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Примеры сертификатов</h2>
          <div className={styles.sampleGrid}>
            {["A2", "B2", "C1"].map((lvl) => (
              <div className={`${styles.sampleCard} cardAnim`} key={lvl}>
                <div className={styles.sampleImage} />
                <p>Уровень {lvl}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration */}
        <section
          className={styles.card}
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Как пройти регистрацию</h2>
          <ol className={styles.list}>
            <li>Выберите язык.</li>
            <li>Создайте личный кабинет.</li>
            <li>Оплатите участие.</li>
            <li>Получите инструкцию.</li>
            <li>Пройдите экзамен.</li>
          </ol>
        </section>

        {/* CTA */}
        <section
          className={styles.cta}
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.titleParallax}>Готовы получить сертификат?</h2>
          <p>Запишитесь на ближайшую дату экзамена онлайн.</p>

          <button className={`${styles.button} ${styles.ctaButton}`}>
            Записаться на экзамен <ArrowRight />
          </button>

          <div className={styles.dateInfo}>
            <Calendar className={styles.calendarIcon} />
            <span>Ближайшие даты доступны каждую неделю</span>
          </div>
        </section>
      </div>
    </main>
  );
};
