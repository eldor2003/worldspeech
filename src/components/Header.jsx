import React from "react";
import "../styles/header.css";

const Header = () => {
  const closeMenu = () => {};
  return (
    <header className="header">
      <div className="container">
        <div className="header_block">
          <div className="logo">
            <img src="/logo-full-icon.svg" alt="logo" />
          </div>

          <nav className="navbar">
            <img
              src="close.png"
              className="close_icon"
              alt="close"
              onClick={closeMenu()}
            />

            <ul>
              <li>
                <a href="#!">Тарифы</a>
              </li>
              <li>
                <a href="#!">Безопасность</a>
              </li>
              <li>
                <a href="#!">Отзывы</a>
              </li>
              <li>
                <a href="#!">FAQ</a>
              </li>
              <li>
                <a href="#!">Новости</a>
              </li>
              <li>
                <a href="#!">Помощь</a>
              </li>
            </ul>
          </nav>

          <div className="actions">
            <div className="auth">
              <button className="btn btn-outline">Вход</button>
              <button className="btn btn-primary">Регистрация</button>
            </div>

            <button className="menu_btn">
              <img src="menu-icon.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
