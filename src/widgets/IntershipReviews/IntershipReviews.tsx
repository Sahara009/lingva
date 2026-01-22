import { useEffect, useRef } from "react";
import styles from "./IntershipReviews.module.scss";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const cardsData = [
  {
    img: "https://img.freepik.com/premium-psd/3d-avatar-character_975163-708.jpg?semt=ais_hybrid&w=740",
    name: "Киселев Данил",
    rating: 5,
    text: "Курсы были очень увлекательными и полезными благодаря высокой квалификации учителей. Материал подавался понятно, а игровые элементы помогали лучше усвоить знания. Уроки оставили очень приятные впечатления",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=509e925e00ebfc1596c8f4f75ce7b385bcddc9ed-9456457-images-thumbs&n=13",
    name: "Васильева Ева",
    rating: 5,
    text: "Преподаватели высоко квалифицированы, объясняют наглядно и доступно. Уроки интересные и увлекательные.",
  },
  {
    img: "https://img.freepik.com/premium-vector/cat-illustration-cute-style_1130875-281.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Назарова Мария",
    rating: 5,
    text: "Стажировка по турецкому языку дала отличные знания и впечатления. Полное погружение в язык без использования родного очень помогло в обучении. Студенты из разных стран легко общались и учились вместе.",
  },
  {
    img: "https://i.pinimg.com/originals/01/0c/a4/010ca4828888578e7ecbb9be86f396ff.jpg",
    name: "Кузьмина Кира",
    rating: 5,
    text: "Обучение было профессионально организовано, уроки насыщенные и полезные. Материал подаётся ясно, занятия мотивируют и ускоряют изучение языка.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=f8a9a003c55f79f68666e04de419ce2fb108fe0d-12822619-images-thumbs&n=13",
    name: "Львов Иван",
    rating: 5,
    text: "Курс очень интенсивный и полезный. За время занятий значительно улучшились навыки разговорного языка. Отличная организация и внимательные преподаватели сделали обучение комфортным и интересным.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=bb9b1747868365a6cd98bdf90a9c7a3e11eb95b6-12726927-images-thumbs&n=13",
    name: "Савина Анастасия",
    rating: 5,
    text: "Очень приятно, что преподаватели вкладывают столько усилий, чтобы научить студентов. Учебные материалы заслуживают отдельного внимания — таких пособий по арабскому я ещё не видела, они ещё больше влюбляют в язык. А Иордания — это настоящая любовь. Очень рада, что прошла стажировку именно здесь.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=c89474e073529fbf9e582e78d9bd08d6_l-5480599-images-thumbs&n=13",
    name: "Карпова Мария",
    rating: 5,
    text: "Оман — страна, которую должен посетить каждый. Я очень рада, что побывала здесь и смогла глубже познакомиться с арабской культурой.",
  },
];

export const IntershipReviews = () => {
  const tracksRef = useRef<(HTMLDivElement | null)[]>([]);

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
      <motion.h3
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Ваши отзывы
      </motion.h3>
      <section className={styles.carousel}>
        {[false, true].map((reverse, index) => (
          <div
            key={index}
            className={`${styles.carousel__content} ${
              reverse ? styles.carousel__reverse : ""
            }`}
            ref={(el) => {
              tracksRef.current[index] = el;
            }}
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
                      <Star key={i} size={18} fill="gold" color="gold" />
                    ))}
                  </div>
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
