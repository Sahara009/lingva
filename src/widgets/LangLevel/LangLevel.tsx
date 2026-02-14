import React from "react";
import style from "./LangLevel.module.scss";
import backgroundPhoto from "../../shared/assets/svgBack.svg";
import cat from "../../shared/assets/a-cute-blue-cat-illustration-that-is-opening-its-m_08.12.2025.png";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const LangLevel: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`${style.section} ${className || ""}`}
      style={{ backgroundImage: `url(${backgroundPhoto})` }}
    >
      <div className={style.content}>
        <h2 className={style.title}>Начните подготовку уже сейчас!</h2>

        <p className={style.subtitle}>
          Узнайте свой уровень языка и получите консультацию по обучению.
        </p>

        <Link to={"https://t.me/bibliotekalingvaru"}>
          <button className={style.button}>Проконсультироваться</button>
        </Link>
      </div>

      <div className={style.imageWrapper}>
        {/* Ты подставишь свою картинку */}
        <img src={cat} alt="promo" className={style.image} />
      </div>
    </section>
  );
};
