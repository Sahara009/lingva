import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BounceCards.module.scss";

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

gsap.registerPlugin(ScrollTrigger);

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 800,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(5deg) translate(-400px)",
    "rotate(0deg) translate(-210px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(200px)",
    "rotate(-5deg) translate(390px)",
  ],
  enableHover = true,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%", // Когда верх секции дойдет до 80% высоты экрана
          toggleActions: "play none none none", // анимация запускается один раз
        },
      }
    );
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate)
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    if (transformStr === "none") return "rotate(0deg)";
    return `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform: string, offsetX: number) => {
    const translateRegex = /translateX\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translateX(${newX}px)`);
    }
    return baseTransform === "none"
      ? `translateX(${offsetX}px)`
      : `${baseTransform} translateX(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const card = cardsRef.current[i];
      if (!card) return;

      gsap.killTweensOf(card);
      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        gsap.to(card, {
          transform: getNoRotationTransform(baseTransform),
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const distance = Math.abs(hoveredIdx - i);
        gsap.to(card, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay: distance * 0.05,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const card = cardsRef.current[i];
      if (!card) return;
      gsap.killTweensOf(card);
      gsap.to(card, {
        transform: transformStyles[i] || "none",
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.bounceCardsContainer} ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => (cardsRef.current[idx] = el!)}
          className={styles.card}
          style={{ transform: transformStyles[idx] ?? "none" }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img src={src} alt={`card-${idx}`} />
        </div>
      ))}
    </div>
  );
}
