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
          <h2>Что мы предлагаем</h2>
          <p>
            Учитесь онлайн, закрепляйте знания с помощью наших учебников,
            практикуйтесь в языковой среде и подтверждайте уровень владения
            языком — всё на одной образовательной платформе
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
                  <div>Опытные преподаватели-носители языка.</div>
                  <div>
                    Авторская методика с упором на разговорную практику.
                  </div>
                  <div>Гибкий график и онлайн-доступ.</div>
                  <div>Возможность продолжить обучение за границей.</div>
                </div>
              </div>

              <div className={style.services__info_internship3}>
                <h3>Методика обучения</h3>
                <div className={style.services__info_internship3_blocks}>
                  <div>Без использования языка-посредника</div>
                  <div>Уровни от начального до продвинутого</div>
                  <div>Преподаватели — носители языка</div>
                  <div>Основной упор на разговорную практику</div>
                  <div>
                    Все навыки речи: говорение, аудирование, чтение и письмо
                  </div>
                  <div>Сертификат о прохождении стажировки</div>
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
                  <div>Опытные преподаватели-носители языка.</div>
                  <div>
                    Авторская методика с упором на разговорную практику.
                  </div>
                  <div>Гибкий график занятий и онлайн-доступ.</div>
                  <div>Сертификат после завершения курса.</div>
                  <div>Возможность продолжить обучение за границей.</div>
                </div>
              </div>
              <div className={style.services__info_internship3}>
                <h3>Методика обучения</h3>
                <div className={style.services__info_internship3_blocks}>
                  <div>• Без использования языка-посредника .</div>
                  <div>• Онлайн обучение и гибкий график.</div>
                  <div>• Практические задания.</div>
                  <div>• Преподаватели — носители языка.</div>
                  <div>
                    • Все навыки речи: говорение, аудирование, чтение и письмо.
                  </div>
                  <div>
                    • После окончания — сертификат международного образца.
                  </div>
                </div>
              </div>
              <div className={style.services__info_internship3}>
                <h3>Курсы по языкам</h3>

                <div className={style.services__info_internship3_blocks}>
                  <div className={style.blocks__languages}>
                    <strong>Арабский язык</strong>
                    <br />
                    Уровни от начального по продвинутый Разговорная практика,
                    основы грамматики
                    <br />
                    <button>Записаться</button>
                  </div>

                  <div className={style.blocks__languages}>
                    <strong>Турецкий язык</strong>
                    <br />
                    Групповые и индивидуальные занятия, подготовка к TÖMER
                    <br />
                    <button>Записаться</button>
                  </div>

                  <div className={style.blocks__languages}>
                    <strong>Английский язык</strong>
                    <br />
                    Английский язык Разговорный, бизнес-курс, подготовка к IELTS
                    <br />
                    <button>Записаться</button>
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
                  <div>• Состоит из теста, собеседовния и написания эссе.</div>
                  <div>
                    • Проверяются четыре навыка: чтение, письмо, аудирование,
                    разговорная речь.
                  </div>
                  <div>
                    • Выдается сертификат международного образца в соотвествии
                    со стандaртами ALTE (Европейская ассоциация экзаменационных
                    советов по иностранным языкам).
                  </div>
                </div>
              </div>
              <div className={style.services__info_internship2}>
                <h3>Кто может пройти экзамен?</h3>
                <div className={style.services__info_internship2_blocks}>
                  <div>
                    Те, кто хочет подтвердить свой уровень владения языком.
                  </div>
                  <div>Кому нужен сертификат для работы .</div>
                  <div>Кому нужен сертификат для обучения за границей.</div>
                </div>
              </div>
              <div className={style.services__info_internship2}>
                <h3>Как зарегистрироваться</h3>
                <div className={style.services__info_internship3_blocks}>
                  <div>
                    1. Выберите язык и пройдите консультацию у нашего
                    специалиста.
                  </div>
                  <div>2. Пройдите регистрацию.</div>
                  <div>3. Выберите удобную дату.</div>
                  <div>4. Оплатите экзамен.</div>
                  <div>5. Пройдите экзамен и собеседование онлайн.</div>
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
