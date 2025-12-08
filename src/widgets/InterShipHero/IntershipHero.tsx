import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane } from "lucide-react";
import styles from "./IntershipHero.module.scss";

gsap.registerPlugin(ScrollTrigger);

const createPlaneVariant = (xOffset: number, duration: number) => ({
  fly: {
    y: [-50, -500],
    x: [0, xOffset],
    rotate: [0, 25],
    transition: {
      y: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" },
      x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" },
      rotate: {
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      },
    },
  },
});

export const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgEl = bgRef.current;
    const l1 = layer1Ref.current;
    const l2 = layer2Ref.current;
    if (!bgEl || !l1 || !l2) return;

    gsap.to(bgEl, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: { trigger: bgEl, scrub: true },
    });
    gsap.to(l1, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: { trigger: bgEl, scrub: true },
    });
    gsap.to(l2, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: { trigger: bgEl, scrub: true },
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg} ref={bgRef} />
      <div className={styles.layer1} ref={layer1Ref} />
      <div className={styles.layer2} ref={layer2Ref} />

      {/* Несколько самолетов */}
      <motion.div
        className={styles.planeContainer1}
        variants={createPlaneVariant(300, 12)}
        animate="fly"
      >
        <Plane size={48} color="blue" /> {/* Синий цвет */}
      </motion.div>
      <motion.div
        className={styles.planeContainer2}
        variants={createPlaneVariant(250, 10)}
        animate="fly"
      >
        <Plane size={48} color="blue" /> {/* Синий цвет */}
      </motion.div>
      <motion.div
        className={styles.planeContainer3}
        variants={createPlaneVariant(350, 14)}
        animate="fly"
      >
        <Plane size={48} color="blue" /> {/* Синий цвет */}
      </motion.div>
      <motion.div
        className={styles.planeContainer4}
        variants={createPlaneVariant(200, 11)}
        animate="fly"
      >
        <Plane size={48} color="blue" /> {/* Синий цвет */}
      </motion.div>

      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Языковая стажировка за границей
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Погрузитесь в культуру и получите реальную языковую практику в
          Иордании, Омане или Турции.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            className={styles.primary}
          >
            Подать заявку
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            className={styles.secondary}
          >
            Получить консультацию
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
