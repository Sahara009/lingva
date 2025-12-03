import React, { useEffect, useRef } from "react";
import "./CountriesMobile.scss";
import image1 from "../../shared/assets/IMG_0009 (1).png";
import image2 from "../../shared/assets/IMG_0011 (1).png";
import image3 from "../../shared/assets/IMG_0012 (1).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { title: "Оман", img: image1 },
  { title: "Турция", img: image2 },
  { title: "Иордания", img: image3 },
];

export const CardsMobile: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      // Вспышка и появление
      gsap.fromTo(
        card,
        { opacity: 0, filter: "brightness(0)" },
        {
          opacity: 1,
          filter: "brightness(1.5)",
          duration: 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            gsap.to(card, { filter: "brightness(1)", duration: 0.3 });
          },
        }
      );

      // Лёгкое колебание (бесконечно)
      gsap.to(card, {
        rotation: gsap.utils.random(-2, 2),
        y: gsap.utils.random(-5, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: gsap.utils.random(2, 4),
      });

      // Световой блик сверху фото
      const shine = document.createElement("div");
      shine.className = "shine";
      card.appendChild(shine);
      gsap.fromTo(
        shine,
        { x: "-100%", opacity: 0 },
        {
          x: "100%",
          opacity: 0.3,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );

      // Анимация подчеркивания текста
      const title = titleRefs.current[i];
      if (title) {
        const underline = title.querySelector(".underline") as HTMLDivElement;
        if (underline) {
          gsap.fromTo(
            underline,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: "left",
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: title,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }
    });
  }, []);

  return (
    <>
      <div className="title">
        <h2 className="title__main">Страны сотрудничества</h2>
        <p className="title__desc">
          Хотите практиковать язык там, где он является частью повседневной
          жизни? Наши программы стажировок в{" "}
          <span>Иордании, Омане и Турции</span> дают возможность учиться через
          реальное общение и яркие культурные открытия.
        </p>
      </div>
      <div className="cards-mobile-container">
        {cardsData.map((card, index) => (
          <div
            className="card-mobile"
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <img src={card.img} alt={card.title} />
            <div
              className="card-mobile__title"
              ref={(el) => {
                if (el) titleRefs.current[index] = el;
              }}
            >
              {card.title}
              <div className="underline"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
