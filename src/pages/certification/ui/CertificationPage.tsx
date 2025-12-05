import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./CertificationPage.module.scss";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const CertificationPage = () => {
  const pageRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // =======================
      // 1. Fade-in всей страницы
      // =======================
      gsap.from(pageRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
      });

      // =======================
      // 2. Анимация секций по очереди
      // =======================
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

      // =======================
      // 3. Анимация карточек
      // =======================
      gsap.from(".cardAnim", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cardAnim",
          start: "top 85%",
        },
      });

      // =======================
      // 4. Параллакс заголовков
      // =======================
      gsap.from(".titleParallax", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".titleParallax",
          start: "top 90%",
        },
      });

      // =======================
      // 5. Анимация кнопки CTA
      // =======================
      gsap.from(".ctaButton", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".ctaButton",
          start: "top 90%",
        },
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
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
        >
          <h1>Сертификация владения языком</h1>
          <p>
            Онлайн-экзамен и сертификат международного образца по арабскому,
            английскому и турецкому языкам — уровни A1–C2.
          </p>
        </section>

        {/* Grid */}
        <section
          className={styles.grid}
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
        >
          <div className={styles.card + " cardAnim"}>
            <h2>Какие задачи решает сертификация</h2>
            <ul>
              {[
                "Официальное подтверждение уровня владения языком A1–C2.",
                "Доступные онлайн-экзамены для арабского, английского и турецкого.",
                "Международный сертификат, признаваемый образовательными центрами.",
                "Подтверждение уровня для работы, учёбы или иммиграции.",
                "Структурированный формат экзамена без стресса.",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle className={styles.icon} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card + " cardAnim"}>
            <h2>Почему это актуально</h2>
            <p>
              Во многих странах Ближнего Востока и Европы требуется официальный
              сертификат уровня. Мы предлагаем удобный онлайн-формат…
            </p>
          </div>
        </section>

        {/* Exam Format */}
        <section
          className={styles.examFormat}
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
        >
          <h2>Формат экзамена</h2>
          <ul>
            <li>• Экзамен полностью проходит онлайн.</li>
            <li>• Проверяются навыки…</li>
            <li>• Продолжительность: 60–90 минут.</li>
            <li>• Автоматический сертификат.</li>
          </ul>
        </section>

        {/* Sample Certificates */}
        <section
          className={styles.samples}
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
        >
          <h2>Примеры сертификатов</h2>

          <div className={styles.sampleGrid}>
            {["A2", "B2", "C1"].map((lvl) => (
              <div className={styles.sampleCard + " cardAnim"} key={lvl}>
                <div className={styles.sampleImage} />
                <p>Уровень {lvl}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration */}
        <section
          className={styles.card}
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
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
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
        >
          <h2 className="titleParallax">Готовы получить сертификат?</h2>
          <p>Запишитесь на ближайшую дату экзамена онлайн.</p>

          <button className={styles.button + " ctaButton"}>
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
