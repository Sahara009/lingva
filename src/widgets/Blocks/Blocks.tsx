import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Blocks.module.scss";
import ca from "../../shared/assets/ca.png";
import plane from "../../shared/assets/plane.png";
import people from "../../shared/assets/people.png";
import school from "../../shared/assets/scholl.png";

interface Props {
  className?: string;
}

export const Blocks: React.FC<Props> = ({ className }) => {
  const images = [ca, plane, school, people];

  return (
    <div className={className}>
      <motion.div
        className={styles.blocks}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {images.map((imgSrc, index) => (
          <Block key={index} imgSrc={imgSrc} />
        ))}
      </motion.div>
    </div>
  );
};

interface BlockProps {
  imgSrc: string;
  circleColor?: string;
  textColor?: string;
}

const Block: React.FC<BlockProps> = ({ imgSrc }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Варианты анимации блока
  const blockVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={styles.blocks__block_1}
      onMouseMove={(e) => {
        const rect = (
          e.currentTarget as HTMLDivElement
        ).getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={blockVariants} // добавили анимацию появления
    >
      {/* Inverted circular overlay */}
      {hovered && (
        <motion.div
          className={styles.invertCircle}
          style={{
            x: cursorPos.x - 50,
            y: cursorPos.y - 50,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <h3>10+ лет опыта</h3>
      <img src={imgSrc} alt="image" />
      <p>
        Мы развиваем языковое образование и собираем лучшие методики уже более
        десяти лет.
      </p>
    </motion.div>
  );
};
