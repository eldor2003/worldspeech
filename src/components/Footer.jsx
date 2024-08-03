"use client";
import Link from "next/link";
import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="logo">
            <img src="/logo-full-icon.svg" alt="logo" />
          </div>

          <div className="row footer_mobile--link">
            <Link href={"#!"}>
              <img src="/tg_icon.svg" alt="" />
            </Link>
            <Link href={"#!"}>
              <img src="/youtube_icon.svg" alt="" />
            </Link>
          </div>

          <nav className="navbar">
            <ul>
              <li>
                <Link href="#tarif">Тарифы</Link>
              </li>
              <li>
                <Link href="#safety">Безопасность</Link>
              </li>
              <li>
                <Link href="#feedback">Отзывы</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#news">Новости</Link>
              </li>
              <li>
                <Link href="help">Помощь</Link>
              </li>
            </ul>
          </nav>

          <div className="footer_right">
            <div className="row">
              <Link href="cooperation">Сотрудничество</Link>
              <Link href="support">Написать в поддержку</Link>
            </div>
            <div className="row">
              <Link href={"#!"}>
                <img src="/tg_icon.svg" alt="" />
              </Link>
              <Link href={"#!"}>
                <img src="/youtube_icon.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="hr" />

        <div className="footer__bottom">
          <div className="footer__bottom--left">
            <Link href={"#!"}>Политика обработки персональных данных</Link>
            <Link href={"/offer"}>Оферта</Link>
          </div>

          <div className="footer__bottom--right">
            <p>Москва</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
