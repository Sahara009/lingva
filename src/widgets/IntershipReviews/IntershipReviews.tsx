import { useEffect, useRef } from "react";
import styles from "./IntershipReviews.module.scss";
import { motion } from "framer-motion";

const cardsData = [
  {
    img: "https://img.freepik.com/premium-psd/3d-avatar-character_975163-708.jpg?semt=ais_hybrid&w=740",
    name: "Derloz Lill",
    rating: 5,
    text: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=509e925e00ebfc1596c8f4f75ce7b385bcddc9ed-9456457-images-thumbs&n=13",
    name: "Alexa Hants",
    rating: 5,
    text: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
  },
  {
    img: "https://img.freepik.com/premium-vector/cat-illustration-cute-style_1130875-281.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Milar Xans",
    rating: 5,
    text: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
  },
  {
    img: "https://i.pinimg.com/originals/01/0c/a4/010ca4828888578e7ecbb9be86f396ff.jpg",
    name: "Devy Lots",
    rating: 5,
    text: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
  },
];

export const IntershipReviews = () => {
  const tracksRef = useRef([]);

  useEffect(() => {
    tracksRef.current.forEach((track) => {
      if (!track) return;
      const cards = Array.from(track.children);
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
      });
    });
  }, []);

  return (
    <>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Ваши отзывы
      </motion.h2>
      <section className={styles.carousel}>
        {[false, true].map((reverse, index) => (
          <div
            key={index}
            className={`${styles.carousel__content} ${
              reverse ? styles.carousel__reverse : ""
            }`}
            ref={(el) => (tracksRef.current[index] = el)}
          >
            {cardsData.map((card, idx) => (
              <article key={idx} className={styles.carousel__card}>
                <div className={styles.carousel__image}>
                  <img
                    src={card.img}
                    alt={card.name}
                    className={styles.carousel__img}
                  />
                </div>

                <h3 className={styles.carousel__name}>{card.name}</h3>

                <div className={styles.carousel__rating}>
                  <div className={styles.carousel__stars}>
                    {Array.from({ length: card.rating }).map((_, i) => (
                      <i key={i} className="ri-star-fill" />
                    ))}
                  </div>
                  <h3 className={styles.carousel__number}>
                    {card.rating.toFixed(1)}
                  </h3>
                </div>

                <p>{card.text}</p>
              </article>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};
