"use client";
import React, { useEffect, useState } from "react";
import "../styles/header.css";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [stick, setStick] = useState(false);
  const closeMenu = () => {
    setMenu(false);
  };
  const openMenu = () => {
    setMenu(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${stick ? "stick" : ""}`}>
      <div className="container">
        <div className="header_block">
          <div className="logo">
            <img src="/logo-full-icon.svg" alt="logo" />
          </div>

          <nav className={`navbar ${menu ? "active" : ""}`}>
            <div className="menu-top">
              <div className="row">
                <button className="close_menu">
                  <img
                    src="close.png"
                    className="close_icon"
                    alt="close"
                    onClick={() => closeMenu()}
                  />
                </button>
              </div>

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
            </div>

            <div className="menu__bottom">
              <div className="auth">
                <button className="btn btn-outline">Вход</button>
                <button className="btn btn-primary">Регистрация</button>
              </div>
            </div>
          </nav>

          <div className="actions">
            <div className="auth">
              <button className="btn btn-outline">Вход</button>
              <button className="btn btn-primary">Регистрация</button>
            </div>

            <button className="open_menu" onClick={() => openMenu()}>
              <img src="menu-icon.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
