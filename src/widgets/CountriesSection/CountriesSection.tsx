import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CountriesSection.module.scss";
import { MapPin, Languages, GraduationCap, Globe } from "lucide-react";
import jordan from "../../shared/assets/maxresdefault.jpg";
import turkiye from "../../shared/assets/stambul4.jpg";
import oman from "../../shared/assets/14108980603_21547eb1fc_b.jpg";

const countries = [
  {
    id: 2,
    name: "Оман",
    bg: oman,
    short:
      "Уникальная культура, спокойная атмосфера и полное языковое погружение.",
    bullets: [
      { icon: MapPin, text: "Маскат и другие города" },
      { icon: Languages, text: "Арабский язык в живой среде" },
      { icon: GraduationCap, text: "Занятия с носителями" },
      { icon: Globe, text: "Традиции и быт Омана" },
    ],
    full: `Оман по праву считается одной из самых красивых стран Арабского залива. Эта страна по сей день бережно сохраняет свои самобытные традиции и уникальную культуру. Для каждого арабиста побывать в Омане — настоящая мечта.

    Мы предоставляем нашим студентам возможность не только увидеть эту великолепную страну, но и выучить арабский язык через полное погружение в культуру и живую языковую среду.
    
    Программа стажировки включает занятия с опытными носителями языка, практические упражнения и общение с жителями страны. В результате студенты не только совершенствуют язык, но и приобретают глубокое понимание культуры и традиций Омана.`,
    accent: "#0e668d",
  },
  {
    id: 1,
    name: "Иордания",
    bg: jordan,
    short: "Погружение в арабскую культуру и обучение в языковой среде Аммана.",
    bullets: [
      { icon: MapPin, text: "Амман — столица Иордании" },
      { icon: Languages, text: "Арабский язык с носителями" },
      { icon: GraduationCap, text: "Интенсивное обучение" },
      { icon: Globe, text: "Экскурсии: Петра, Вади-Рам" },
    ],
    full: `Стажировка по арабскому языку проходит в столице Иордании — Аммане. Участвуя в нашей программе, студенты полностью погружаются в арабскую культуру и языковую среду, где не только развивают языковые навыки, но и знакомятся с культурой одной из самых известных стран Ближнего Востока.

    Иордания считается одной из самых сильных и специализированных стран в области преподавания арабского языка, поэтому она является идеальным местом для его изучения. Все преподаватели — носители языка, что даёт студентам возможность изучать арабский у настоящих знатоков и практиков.
    
    Кроме учебной части, программа включает культурное погружение. Иордания — это страна легендарной Петры, одного из семи чудес света, и уникальной пустыни Вади-Рам.`,
    accent: "#0e668d",
  },
  {
    id: 3,
    name: "Турция",
    bg: turkiye,
    short:
      "Изучение турецкого языка в сердце Стамбула среди истории и культуры.",
    bullets: [
      { icon: MapPin, text: "Стамбул — культурная столица" },
      { icon: Languages, text: "Турецкий язык" },
      { icon: GraduationCap, text: "Современные языковые школы" },
      { icon: Globe, text: "История, архитектура, быт" },
    ],
    full: `Турецкий язык — один из самых распространённых языков Востока. Язык страны султанов и невероятной архитектуры, язык, с которым связано столько истории и культуры. Каждый, кто так или иначе связан с турецким, мечтает прочувствовать атмосферу волшебного Стамбула.

    Как сделать пребывание в этом городе одновременно полезным и увлекательным? Конечно, отправиться на языковую стажировку!
    
    Наша стажировка проходит в самом центре Стамбула. Студенты получают уникальную возможность изучать язык и одновременно открывать для себя новые уголки этого исторического города, погружаясь в его культуру, традиции и повседневную жизнь.`,
    accent: "#0e668d",
  },
];

export const CountriesSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Страны стажировок
      </motion.h2>

      <div className={styles.list}>
        {countries.map((country, index) => (
          <motion.div
            key={country.id}
            className={styles.card}
            style={{ backgroundColor: country.accent }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${country.bg})`,
              }}
            />

            <div className={styles.content}>
              <h3>{country.name}</h3>
              <p>{country.short}</p>

              <ul className={styles.bullets}>
                {country.bullets.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i}>
                      <Icon size={18} />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>

              <button
                className={styles.button}
                onClick={() => setSelectedCountry(country)}
              >
                Подробнее
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.close}
                onClick={() => setSelectedCountry(null)}
              >
                ✕
              </button>

              <h3 className={styles.modal__title}>{selectedCountry.name}</h3>
              <p className={styles.fullText}>{selectedCountry.full}</p>

              <button className={styles.contactButton}>Связаться</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
