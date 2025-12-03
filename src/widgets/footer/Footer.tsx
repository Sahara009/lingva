import React from "react";
import style from "./Footer.module.scss";
import logo from "../../shared/assets/snapedit_1763204574005 1.png";
import whatsapp from "../../shared/assets/whatsapp.svg";
import telegramm from "../../shared/assets/telegamIoc.svg";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.footer}>
        <div className={style.footer__up}>
          <div className={style.footer__up_logo}>
            <img src={logo} alt="image" />
          </div>
          <div className={style.footer__up_list}>
            <div>
              <h4>Меню</h4>
              <nav>
                <li>Каталог</li>
                <li>Контакты</li>
                <li>Курсы</li>
                <li>Стажировка</li>
                <li>Сертификация</li>
              </nav>
            </div>
            {/* <div>
              <h4>Связь</h4>
              <nav>
                <li>Telegramm</li>
                <li>Whatsapp</li>
              </nav>
            </div> */}
            <div>
              <h4>Информация</h4>
              <nav>
                <li>Вопросы</li>
                <li>Помощь</li>
              </nav>
            </div>
          </div>
          <div className={style.footer__up_more}>
            <h4>Больше возможностей вместе с Библиотекой Лингва!</h4>
            <p>Ответим на любые интересующие вас вопросы</p>
            <button>Задать вопрос</button>
            <div className={style.footer__up_more_icons}>
              <img src={whatsapp} alt="icon" />
              <img src={telegramm} alt="icon" />
            </div>
          </div>
        </div>
        <div className={style.footer__down}>
          <div className={style.footer__down_info}>
            <ul className={style.footer__down_info_links}>
              <li>
                <a href="/privacy-policy" className={style.privacy}>
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className={style.privacy}>
                  Условия использования
                </a>
              </li>
            </ul>
            <p className={style.company}>
              © 2025 Varnix Group. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
