import React, { type ReactNode } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./WhoUs.module.scss";
import userAvatar from "../../shared/assets/user.png";
import catAvatar from "../../shared/assets/catAvatar.png";

interface Message {
  id: number;
  text: string | ReactNode; // Измените тип text на JSX.Element для поддержки списка
  from: "user" | "cat";
}

interface Props {
  className?: string;
}

export const WhoUs: React.FC<Props> = ({ className }) => {
  const messages: Message[] = [
    { id: 1, text: "Привет! А вы кто такие вообще? 🙂", from: "user" },
    {
      id: 2,
      text: "Здравствуйте! Мы Библиотека Лингва — международная онлайн-академия по изучению иностранных языков.",
      from: "cat",
    },
    { id: 3, text: "А чем вы занимаетесь?", from: "user" },
    {
      id: 4,
      text: (
        <>
          <p>Мы объединяем четыре направления:</p>
          <ul>
            <li>• онлайн-обучение по арабскому, английскому и турецкому;</li>
            <li>• профильная литература и учебные материалы;</li>
            <li>• программы обучения и стажировок за рубежом;</li>
            <li>
              • онлайн-сертификация и определение уровня владения языком
              (A1–C2).
            </li>
          </ul>
        </>
      ),
      from: "cat",
    },
    {
      id: 5,
      text: "То есть у вас можно и учиться, и книги купить, и за границу поехать?",
      from: "user",
    },
    {
      id: 6,
      text: "Именно! Мы даём полный путь: от онлайн-курса — до живой практики в Иордании, Омане и Турции.",
      from: "cat",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={className}>
      <div className={styles.whoUs} ref={ref}>
        <h2 className={styles.title}>Так кто же мы такие?</h2>
        <motion.div
          className={styles.whoUs__wrapper}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                className={msg.from === "user" ? styles.user : styles.cat}
                variants={messageVariants}
              >
                {msg.from === "cat" && <img src={catAvatar} alt="cat avatar" />}
                <div
                  className={
                    msg.from === "user"
                      ? styles.user__message
                      : styles.cat__message
                  }
                >
                  {msg.text}
                </div>
                {msg.from === "user" && (
                  <img src={userAvatar} alt="user avatar" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
