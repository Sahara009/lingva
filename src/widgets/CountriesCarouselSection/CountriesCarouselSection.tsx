import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../../lib/useIsMobile";
import "./CountriesCarouselSection.scss";
import image1 from "../../shared/assets/IMG_0009 (1).png";
import image2 from "../../shared/assets/IMG_0011 (1).png";
import image3 from "../../shared/assets/IMG_0012 (1).png";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { title: "Турция", desc: "Солнечная страна и тд", img: image1 },
  { title: "Греция", desc: "Острова и море", img: image2 },
  { title: "Италия", desc: "Культура и кухня", img: image3 },
];

export const Cards = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const cardElements = cardsRef.current?.querySelectorAll(".card");
    if (!cardElements) return;

    if (isMobile) {
      // --- Мобильная версия: карточки в колонну с анимацией вспышки ---
      cardElements.forEach((card) => {
        gsap.set(card, { opacity: 0, scale: 0.9 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          end: "top 70%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              scale: 0.9,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        });
      });
    } else {
      // --- Десктопная версия: текущая анимация ---
      if (cardElements.length < 3) return;

      const card2 = cardElements[1] as HTMLElement;
      const card3 = cardElements[2] as HTMLElement;

      const slideDistance = 300;
      gsap.set(card2, { x: 0 });
      gsap.set(card3, { x: 0 });

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(card2, {
            x: -slideDistance * progress,
            rotation: -8 * progress,
          });
          gsap.set(card3, {
            x: slideDistance * progress,
            rotation: 8 * progress,
          });
        },
      });

      // Hover scale для ПК
      cardElements.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.09, duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3 });
        });
      });
    }
  }, [isMobile]);

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
      <div
        className={`cards-container ${isMobile ? "mobile" : ""}`}
        ref={cardsRef}
      >
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
          </div>
        ))}
      </div>
    </>
  );
};
