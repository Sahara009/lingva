import React from "react";
import style from "./Footer.module.scss";
import logo from "../../shared/assets/snapedit_1763204574005 1.png";
import whatsapp from "../../shared/assets/whatsapp.svg";
import telegramm from "../../shared/assets/telegamIoc.svg";
import { Link } from "react-router-dom";

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
                <Link to={"/catalog"}>
                  <li>Каталог</li>
                </Link>
                <Link to={"/courses"}>
                  <li>Курсы</li>
                </Link>
                <Link to={"/intership"}>
                  <li>Стажировка</li>
                </Link>{" "}
                <Link to={"/certification"}>
                  <li>Сертификация</li>
                </Link>
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
                <Link to={"https://t.me/bibliotekalingvaru"}>
                  <li>Вопросы</li>
                </Link>
                <Link to={"https://t.me/bibliotekalingvaru"}>
                  <li>Помощь</li>
                </Link>
              </nav>
            </div>
          </div>
          <div className={style.footer__up_more}>
            <h4>Больше возможностей вместе с Библиотекой Лингва!</h4>
            <p>Ответим на любые интересующие вас вопросы</p>
            <Link to={"https://t.me/bibliotekalingvaru"}>
              <button>Задать вопрос</button>
            </Link>
            <div className={style.footer__up_more_icons}>
              <a href="https://wa.me/79273601138">
                <img src={whatsapp} alt="icon" />
              </a>
              <Link to={"https://t.me/bibliotekalingvaru"}>
                <img src={telegramm} alt="icon" />
              </Link>
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
