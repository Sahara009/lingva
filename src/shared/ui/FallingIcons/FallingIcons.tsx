import React, { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import styles from "./FallingIcons.module.scss";

interface Icon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export const FallingIcons: React.FC = () => {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const count = isMobile ? 5 : 12; // ← МЕНЬШЕ ИКОНOК НА МОБИЛКЕ

    const arr: Icon[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 7 + Math.random() * 6,
        size: 40 + Math.random() * 40,
        opacity: Math.random() * 0.2,
      });
    }

    setIcons(arr);
  }, []);

  return (
    <div className={styles.container}>
      {icons.map((icon) => (
        <GraduationCap
          key={icon.id}
          className={styles.icon}
          style={{
            left: `${icon.left}%`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
            width: icon.size,
            height: icon.size,
            opacity: icon.opacity,
          }}
        />
      ))}
    </div>
  );
};
