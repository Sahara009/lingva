import React, { useState } from "react";
import style from "./Services.module.scss";
import { ShieldCheck } from "lucide-react";
import amirica from "../../shared/assets/amirica.png";
import arabian from "../../shared/assets/arabian.png";
import turkiye from "../../shared/assets/turkiyeIcon.png";

interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<"internship" | "courses" | "cert">(
    "internship"
  );

  return (
    <div className={className}>
      <div className={style.services}>
        <div className={style.services__title}>
          <h2>Что мы предлагаем студентам и преподавателям</h2>
          <p>
            Учитесь онлайн, проходите стажировки в Иордании, Омане и Турции,
            приобретайте учебники и подтверждайте уровень владения языком —{" "}
            <span>всё на одной образовательной платформе.</span>
          </p>
        </div>

        <div className={style.services__buttons}>
          <button
            className={`${style.services__buttons_button} ${
              activeTab === "internship" ? style.active : ""
            }`}
            onClick={() => setActiveTab("internship")}
          >
            Стажировка <ShieldCheck />
          </button>

          <button
            className={`${style.services__buttons_button} ${
              activeTab === "courses" ? style.active : ""
            }`}
            onClick={() => setActiveTab("courses")}
          >
            Курсы <ShieldCheck />
          </button>

          <button
            className={`${style.services__buttons_button} ${
              activeTab === "cert" ? style.active : ""
            }`}
            onClick={() => setActiveTab("cert")}
          >
            Сертификация <ShieldCheck />
          </button>
        </div>

        {/* --------- Контент секций -------- */}
        <div className={style.services__info}>
          {/* --- Стажировка --- */}
          {activeTab === "internship" && (
            <div className={style.infoBlock}>
              <div className={style.services__info_internship1}>
                <h3>
                  Библеотека Лингва - предлагает обучающие программы по таким
                  языкам:
                </h3>
                <div className={style.services__info_internship1_languages}>
                  <div>
                    <img src={amirica} alt="английский" /> <p>Английский</p>
                  </div>
                  <div>
                    <img src={arabian} alt="арабский" /> <p>Арабский</p>
                  </div>
                  <div>
                    <img src={turkiye} alt="турецкий" /> <p>Турецкий</p>
                  </div>
                </div>
              </div>

              <div className={style.services__info_internship2}>
                <h3>Почему выбирают нас ?</h3>
                <div className={style.services__info_internship2_blocks}>
                  <div>Опытные преподаватели и носители языка.</div>
                  <div>
                    Авторская методика с упором на разговорную практику.
                  </div>
                  <div>Гибкий график и онлайн-доступ 24/7.</div>
                  <div>Возможность продолжить обучение за границей.</div>
                </div>
              </div>

              <div className={style.services__info_internship3}>
                <h3>Методика обучения</h3>
                <div className={style.services__info_internship3_blocks}>
                  <div>1. Краткое описание курса.</div>
                  <div>2. Уровни обучения (A1–C1).</div>
                  <div>3. Выбор нужного курса.</div>
                  <div>4. Ссылка на демо-урок.</div>
                  <div>5. Обучение.</div>
                  <div>6. Вручение сертификата.</div>
                </div>
              </div>
            </div>
          )}

          {/* --- Курсы --- */}
          {activeTab === "courses" && (
            <div className={style.infoBlock}>
              <h3>Курсы</h3>
              <p>Здесь будет контент про курсы (добавишь позже).</p>
            </div>
          )}

          {/* --- Сертификация --- */}
          {activeTab === "cert" && (
            <div className={style.infoBlock}>
              <h3>Сертификация</h3>
              <p>Тут будет контент для сертификации.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
