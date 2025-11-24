import React, { useState } from "react";
import style from "./Services.module.scss";
import { Earth, GraduationCap, ShieldCheck } from "lucide-react";
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
            Стажировка <Earth />
          </button>

          <button
            className={`${style.services__buttons_button} ${
              activeTab === "courses" ? style.active : ""
            }`}
            onClick={() => setActiveTab("courses")}
          >
            Курсы <GraduationCap />
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
              <div className={style.services__info_internship2}>
                <h3>Почему выбирают наши курсы?</h3>
                <div className={style.services__info_internship2_blocks}>
                  <div>Опытные преподаватели и носители языка.</div>
                  <div>
                    Авторская методика с упором на разговорную практику.
                  </div>
                  <div>Гибкий график занятий и онлайн-доступ 24/7.</div>
                  <div>Бесплатный демо-урок перед началом обучения.</div>
                  <div>Сертификат после завершения курса.</div>
                  <div>Возможность продолжить обучение за границей.</div>
                </div>
              </div>
              <div className={style.services__info_internship3}>
                <h3>Методика обучения</h3>
                <div className={style.services__info_internship3_blocks}>
                  <div>• Краткое описание программы обучения.</div>
                  <div>• Уровни подготовки от A1 до C1.</div>
                  <div>• Указание количества часов на каждый уровень.</div>
                  <div>• Практические задания и разговорные клубы.</div>
                  <div>• Пройди бесплатный демо-урок перед записью.</div>
                  <div>
                    • После окончания — сертификат международного образца.
                  </div>
                </div>
              </div>
              <div className={style.services__info_internship3}>
                <h3>Курсы по языкам</h3>

                <div className={style.services__info_internship3_blocks}>
                  <div>
                    <strong>Арабский язык</strong>
                    <br />
                    Полная линейка уровней A1–C1.
                    <br />
                    Разговорная практика, диалекты, основы грамматики. Кнопки:
                    «Записаться» / «Пройти тест»
                  </div>

                  <div>
                    <strong>Турецкий язык</strong>
                    <br />
                    Групповые и индивидуальные занятия, подготовка к TÖMER.
                    <br />
                    Кнопки: «Записаться» / «Пройти тест»
                  </div>

                  <div>
                    <strong>Английский язык</strong>
                    <br />
                    Общий английский, разговорный, бизнес-курс, подготовка к
                    IELTS.
                    <br />
                    Кнопки: «Записаться» / «Пройти тест»
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Сертификация --- */}
          {activeTab === "cert" && (
            <div className={style.infoBlock}>
              <div className={style.services__info_internship2}>
                <h3>Как проходит экзамен?</h3>
                <div className={style.services__info_internship3_blocks}>
                  <div>• Экзамен проводится полностью онлайн.</div>
                  <div>
                    • Проверяются четыре навыка: чтение, письмо, аудирование,
                    разговорная речь.
                  </div>
                  <div>• Результаты доступны в течение 48 часов.</div>
                  <div>
                    • Сертификат выдается в электронном виде и заносится в
                    личный кабинет.
                  </div>
                </div>
              </div>
              <div className={style.services__info_internship2}>
                <h3>Что включено</h3>
                <div className={style.services__info_internship2_blocks}>
                  <div>Примеры сертификатов и критерии оценивания.</div>
                  <div>Подготовительные материалы и пробный тест.</div>
                  <div>Поддержка преподавателей при подготовке.</div>
                  <div>Возможность записи на ближайшую дату экзамена.</div>
                </div>
              </div>
              <div className={style.services__info_internship2}>
                <h3>Как зарегистрироваться</h3>
                <div className={style.services__info_internship3_blocks}>
                  <div>1. Выберите язык и уровень.</div>
                  <div>2. Пройдите регистрацию на платформе.</div>
                  <div>3. Оплатите участие.</div>
                  <div>4. Выберите удобную дату.</div>
                  <div>5. Пройдите экзамен онлайн.</div>
                  <div>6. Получите сертификат.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
