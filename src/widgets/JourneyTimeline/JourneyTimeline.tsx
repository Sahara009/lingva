// JourneyTimeline.tsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./JourneyTimeline.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Подача заявки",
    description: "Отправьте заявку на стажировку",
    imgSrc: "/images/step1.png",
  },
  {
    id: 2,
    title: "Подтверждение",
    description: "Подготовка документов и визы",
    imgSrc: "/images/step2.png",
  },
  {
    id: 3,
    title: "Онлайн курсы",
    description: "Уроки по языку и культурная подготовка",
    imgSrc: "/images/step3.png",
  },
  {
    id: 4,
    title: "Стажировка",
    description: "Учеба и практика за границей",
    imgSrc: "/images/step4.png",
  },
  {
    id: 5,
    title: "Сертификация",
    description: "Получение официального сертификата",
    imgSrc: "/images/step5.png",
  },
];

const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Background gradient shift animation
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(container, {
          background: `linear-gradient(180deg,
            rgba(227, 242, 253, ${1 - progress * 0.8}) 0%,
            rgba(243, 229, 245, ${0.25 + progress * 0.5}) 25%,
            rgba(255, 243, 224, ${0.5 + progress * 0.3}) 50%,
            rgba(232, 245, 232, ${0.75 + progress * 0.15}) 75%,
            rgba(252, 228, 236, ${1 - progress * 0.2}) 100%)`,
        });
      },
    });

    // Step animations with parallax
    const stepsEls = container.querySelectorAll(`.${styles.step}`);
    const images = container.querySelectorAll(`.${styles.stepImage}`);

    stepsEls.forEach((el, i) => {
      const image = images[i];

      // Step entrance animation
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          delay: i * 0.1,
        }
      );

      // Parallax effect on images
      gsap.fromTo(
        image,
        { y: 0 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // 3D tilt effect on hover
      el.addEventListener("mouseenter", () => {
        gsap.to(image, {
          rotationY: 10,
          rotationX: 5,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(image, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Animated timeline marker
    const marker = markerRef.current;
    if (marker) {
      gsap.set(marker, { y: 0 });

      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(marker, {
            y: progress * (container.offsetHeight - 20),
            backgroundColor:
              progress < 0.25
                ? "#2196f3"
                : progress < 0.5
                ? "#4caf50"
                : progress < 0.75
                ? "#ff9800"
                : "#9c27b0",
          });
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.timelineContainer} ref={containerRef}>
      <div className={styles.timelineLine} ref={lineRef}></div>
      <div className={styles.timelineMarker} ref={markerRef}></div>
      {steps.map((step) => (
        <div key={step.id} className={styles.step}>
          <div className={styles.stepPoint}></div>
          <img
            src={step.imgSrc}
            alt={step.title}
            className={styles.stepImage}
          />
          <div className={styles.stepText}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyTimeline;
