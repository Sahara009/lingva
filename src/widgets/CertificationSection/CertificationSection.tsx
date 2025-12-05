import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import styles from "./CertificationSection.module.scss";
import catImage from "../../shared/assets/catPhoto.png";
import { Link } from "react-router-dom";

interface Option {
  id: number;
  text: string;
  correct: boolean;
}

const questions = {
  english: {
    question: "Как будет 'Давай начнем учиться!' на английском?",
    options: [
      { id: 1, text: "Let's start learning!", correct: true },
      { id: 2, text: "I need to think about it.", correct: false },
      { id: 3, text: "Let's start traveling!", correct: false },
    ],
  },
  turkish: {
    question: "Как будет 'Давай начнем учиться!' на турецком?",
    options: [
      { id: 1, text: "Hadi öğrenmeye başlayalım!", correct: true },
      { id: 2, text: "Uzaya gitmek istiyorum", correct: false },
      { id: 3, text: "Öğrenmeyi severim!", correct: false },
    ],
  },
  arabic: {
    question: "Как будет 'Давай начнем учиться!' на арабском?",
    options: [
      { id: 1, text: "هيا لنبدأ التعلم!", correct: true },
      { id: 2, text: "أحب أن أقرأ كثيرا.", correct: false },
      { id: 3, text: "هيا نتعلم!", correct: false },
    ],
  },
};

export const CertificationSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const MotionLink = motion(Link);

  const handleClick = (option: Option) => {
    if (option.correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setCompleted(true);
    }
  };

  type Language = "english" | "turkish" | "arabic";
  const currentQuestion = selectedLanguage
    ? questions[selectedLanguage as Language]
    : null;

  return (
    <section className={styles.certification}>
      <h2>Помоги котенку выбрать правильный перевод!</h2>
      <p>Выбери язык и ответь на вопрос</p>

      {!selectedLanguage && (
        <div className={styles.languages}>
          {["english", "turkish", "arabic"].map((lang) => (
            <motion.button
              key={lang}
              className={styles.langBtn}
              onClick={() => setSelectedLanguage(lang)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === "english"
                ? "Английский"
                : lang === "turkish"
                ? "Турецкий"
                : "Арабский"}
            </motion.button>
          ))}
        </div>
      )}

      {selectedLanguage && currentQuestion && (
        <div className={styles.game}>
          <div className={styles.question}>{currentQuestion.question}</div>

          <div className={styles.gameArea}>
            <motion.img
              src={catImage}
              alt="cat"
              className={styles.cat}
              animate={completed ? { y: [-10, 0, -20, 0] } : {}}
              transition={{ duration: 0.6 }}
            />

            <div className={styles.options}>
              {currentQuestion.options.map((option) => (
                <motion.div
                  key={option.id}
                  className={styles.option}
                  onClick={() => handleClick(option)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {completed && (
        <MotionLink
          to="/certification"
          className={styles.cta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Узнать свой уровень
        </MotionLink>
      )}
    </section>
  );
};
