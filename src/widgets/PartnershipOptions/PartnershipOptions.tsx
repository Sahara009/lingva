import React from "react";
import style from "./PartnershipOptions.module.scss";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

interface Props {
  className?: string;
}

export const PartnershipOptions: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.partnershipOptions}>
        <div className={style.partnershipOptions__title}>
          <h2>Сотрудничество</h2>
          <p>
            Мы приглашаем языковые школы, университеты и преподавателей к
            сотрудничеству по следующим направлениям:
          </p>
        </div>

        <div className={style.partnershipOptions__cards}>
          <div className={style.card}>
            <div className={style.card__icon}>
              <Briefcase size={40} />
            </div>
            <h3>Групповые стажировки за границей</h3>
            <p>
              Организация образовательных поездок и языковых программ для
              студентов и преподавателей.
            </p>
          </div>

          <div className={style.card}>
            <div className={style.card__icon}>
              <GraduationCap size={40} />
            </div>
            <h3>Онлайн-курсы для групп</h3>
            <p>
              Проведение дистанционного обучения для организованных групп с
              возможностью подбора программы под запрос учреждения.
            </p>
          </div>

          <div className={style.card}>
            <div className={style.card__icon}>
              <BookOpen size={40} />
            </div>
            <h3>Оптовые закупки и поставка учебных материалов</h3>
            <p>
              Поставка учебников и методических материалов по иностранным языкам
              на выгодных условиях.
            </p>
          </div>
        </div>

        <div className={style.partnershipOptions__footer}>
          <p>
            Будем рады обсудить формат сотрудничества и подготовить
            индивидуальное предложение для вашей организации.
          </p>
          <button>ОБСУДИТЬ СОТРУДНИЧЕСТВО</button>
        </div>
      </div>
    </div>
  );
};
