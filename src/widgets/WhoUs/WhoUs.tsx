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
    { id: 1, text: "Привет! Расскажите, пожалуйста, про себя.", from: "user" },
    {
      id: 2,
      text: "Здравствуйте! Мы Библиотека Лингва -  международная онлайн-академия по обучению иностранным языкам.",
      from: "cat",
    },
    { id: 3, text: "А чем вы занимаетесь?", from: "user" },
    {
      id: 4,
      text: (
        <>
          <p>Мы объединяем четыре направления:</p>
          <ul>
            <li>• онлайн-обучение иностранным языкам</li>
            <li>• продажа учебников и книг по изучению иностарнных языков</li>
            <li>• языковые стажировки за границей</li>
            <li>• сертификация по определению уровня языка</li>
          </ul>
        </>
      ),
      from: "cat",
    },
    {
      id: 5,
      text: "А какие языка у вас есть?",
      from: "user",
    },
    {
      id: 6,
      text: "На данный момент мы предлагаем курсы по арабскому, английскому и турецкому языкам, но в дальнейшем планируем расширение языковых направлений. ",
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
