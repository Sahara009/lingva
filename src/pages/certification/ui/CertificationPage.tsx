import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Calendar,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  GraduationCap,
  Globe,
  BookOpen,
  FileText,
} from "lucide-react";
import styles from "./CertificationPage.module.scss";
import { Link } from "react-router-dom";

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

  const certificateBenefits = [
    "Возможность поступления в учебные заведения",
    "Возможность трудоустройства",
    "Официальное подтверждение квалификации",
    "Дополнительные преимущества для карьерного роста",
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
            delay: i * 0.15,
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
            },
          });
        }
      });

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
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
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
            Сертификация
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Получите международный сертификат, подтверждающий уровень владения
            языком
          </motion.p>
        </section>

        {/* Sticky Notes Section */}
        <h2 className={styles.tasks__title}>
          Какие задачи решает сертификация?
        </h2>
        <section
          className={styles.stickyNotesSection}
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
        >
          {tasks.map((task, i) => (
            <div
              key={i}
              className={styles.taskNote}
              ref={(el) => {
                notesRef.current[i] = el;
              }}
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

        {/* Международные сертификаты - Full width card */}
        <section
          className={`${styles.card} ${styles.introCard}`}
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
        >
          <div className={styles.introIcon}>
            <Award size={40} />
          </div>
          <h2>Международные сертификаты</h2>
          <p>
            В нашей академии вы можете получить сертификаты международного
            образца, подтверждающие уровень владения языком. Если вы уже
            владеете языком и хотите официально подтвердить свой уровень, вы
            можете пройти онлайн-экзамен и получить соответствующий сертификат.
          </p>
          <p className={styles.alteText}>
            Все учреждения, с которыми мы сотрудничаем, являются членами
            международной ассоциации по оценке и сертификации владения
            иностранными языками <strong>ALTE</strong> (Европейская ассоциация
            экзаменационных советов по иностранным языкам).
          </p>
        </section>

        {/* Tests Grid - Two columns for Arabic and Turkish */}
        <section
          className={styles.testsGrid}
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
        >
          {/* Arabic Test */}
          <div className={styles.testCard}>
            <div className={styles.testHeader}>
              <Globe className={styles.testIcon} />
              <h3>Тест по арабскому языку</h3>
            </div>
            <span className={styles.testFormat}>Формат экзамена: онлайн</span>

            <div className={styles.testSection}>
              <h4>
                <FileText size={18} /> Тестирование
              </h4>
              <p>
                Тест состоит из 80 вопросов и длится 120 минут. На данном этапе
                проверяются знания грамматики и лексики.
              </p>
            </div>

            <div className={styles.testSection}>
              <h4>
                <BookOpen size={18} /> Письменная и устная части
              </h4>
              <p>Этот этап включает чтение, аудирование, письмо и говорение.</p>
              <ul className={styles.testDetails}>
                <li>
                  <strong>Письменная часть:</strong> формат эссе (20-30 мин).
                  Несколько тем на выбор.
                </li>
                <li>
                  <strong>Устная часть:</strong> проводит преподаватель (20-30
                  мин).
                </li>
              </ul>
            </div>
          </div>

          {/* Turkish Test */}
          <div className={styles.testCard}>
            <div className={styles.testHeader}>
              <Globe className={styles.testIcon} />
              <h3>Тест по турецкому языку</h3>
            </div>
            <span className={styles.testFormat}>Формат экзамена: онлайн</span>

            <div className={styles.testSection}>
              <h4>
                <FileText size={18} /> Тестирование
              </h4>
              <p>
                Тест состоит из 80 вопросов и длится 120 минут. На данном этапе
                проверяются знания грамматики и лексики.
              </p>
            </div>

            <div className={styles.testSection}>
              <h4>
                <BookOpen size={18} /> Письменная и устная части
              </h4>
              <p>Этот этап включает чтение, аудирование, письмо и говорение.</p>
              <ul className={styles.testDetails}>
                <li>
                  <strong>Письменная часть:</strong> формат эссе (20-30 мин).
                  Несколько тем на выбор.
                </li>
                <li>
                  <strong>Устная часть:</strong> проводит преподаватель (20-30
                  мин).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TÖMER and TYS - Special card with gradient */}
        <section
          className={styles.tomerSection}
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
        >
          <h2>Экзамены TÖMER и TYS</h2>
          <p className={styles.tomerIntro}>
            Наша академия консультирует по экзаменам TÖMER и TYS. Если вам
            необходимо сдать один из этих экзаменов, мы поможем подобрать
            подходящее место и дату сдачи, а также подадим заявление от вашего
            имени.
          </p>
          <p className={styles.tomerDesc}>
            Экзамены предназначены для неносителей турецкого языка, которые
            хотят официально подтвердить свой уровень владения турецким языком.
          </p>

          <div className={styles.tomerGrid}>
            <div className={styles.tomerCard}>
              <Award className={styles.tomerIcon} />
              <h4>TÖMER</h4>
              <p>
                Экзамен для подтверждения уровня турецкого языка при поступлении
                в университет
              </p>
            </div>
            <div className={styles.tomerCard}>
              <GraduationCap className={styles.tomerIcon} />
              <h4>TYS</h4>
              <p>
                Экзамен для иностранцев, которые планируют преподавать турецкий
                язык или работать в турецких учреждениях
              </p>
            </div>
          </div>
        </section>

        {/* Certificate Benefits - Checkmark list */}
        <section
          className={styles.benefitsSection}
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
        >
          <h2>Что даёт сертификат?</h2>
          <div className={styles.benefitsGrid}>
            {certificateBenefits.map((benefit, i) => (
              <div key={i} className={styles.benefitItem}>
                <CheckCircle className={styles.checkIcon} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className={styles.cta}
          ref={(el) => {
            sectionsRef.current[6] = el;
          }}
        >
          <h2 className={styles.titleParallax}>Готовы получить сертификат?</h2>
          <p>Запишитесь на ближайшую дату экзамена онлайн.</p>
          <Link to={"https://t.me/bibliotekalingvaru"}>
            <button className={`${styles.button} ${styles.ctaButton}`}>
              Записаться на экзамен <ArrowRight />
            </button>
          </Link>

          <div className={styles.dateInfo}>
            <Calendar className={styles.calendarIcon} />
            <span>Ближайшие даты доступны каждую неделю</span>
          </div>
        </section>
      </div>
    </main>
  );
};
