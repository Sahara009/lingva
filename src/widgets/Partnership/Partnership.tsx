import React from "react";
import style from "./Partnership.module.scss";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const Partnership: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.partnership}>
        <div className={style.partnership__wrapper}>
          <h2>Зарабатывай вместе с "Библиотека Лингва".</h2>
          <p>
            Мы предлагаем сотрудничество в сфере учебной литературы и материалов
            для изучения иностранных языков, а также книг для чтения на
            иностранных языках.
          </p>
          <p>
            Наши партнёры — языковые курсы и преподаватели — могут направлять
            своих студентов на языковые стажировки за границей, а мы
            предоставляем все условия для их успешного обучения и практики.
          </p>
          <p>
            Преподавателям мы предлагаем курсы повышения квалификации, чтобы они
            могли развивать профессиональные навыки и расширять возможности для
            работы с международными студентами.
          </p>
          <p>
            С нами вы можете совместить образовательную деятельность с
            дополнительным доходом и профессиональным ростом.
          </p>
          <Link to={"https://t.me/bibliotekalingvaru"}>
            <button>ОСТАВИТЬ ЗАЯВКУ НА СОТРУДНИЧЕСВТО</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
