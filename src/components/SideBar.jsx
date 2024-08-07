"use client";
// src/components/Sidebar.js
import React, { useState } from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="logo">
          <img src="/logo-full-icon.svg" alt="logo" />
        </div>
        <div className="dropdown">
          <button className="btn-primary" onClick={toggleDropdown}>
            Начать встречу {dropdownOpen ? "▲" : "▼"}
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-content-item">
                <img src="cloud-upload.svg" alt="svg" />

                <a href="#">Загрузить файл</a>
              </div>
              <div className="dropdown-content-item">
                <img src="meeting-icon.svg" alt="camera" />
                <a href="#">Google Meet</a>
              </div>
              <div className="dropdown-content-item">
                <img src="zoom-icon.svg" alt="camera" />
                <a href="#">Zoom</a>
              </div>
              <div className="dropdown-content-item">
                <img src="/camera-icon.svg" alt="" />
                <a href="#">Telemost</a>
              </div>
            </div>
          )}
        </div>
        <ul>
          <li>Главная</li>
          <li>Мои транскрипции</li>
          <li>Тарифы</li>
          <li>Настройки</li>
        </ul>
      </div>

      <div className="sidebar__bottom">
        <div className="row">
          <p>Осталось минут</p>
          <span>140 из 300</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "47%" }}></div>
        </div>
        <button className="btn btn-outline">Расширить тариф</button>
      </div>
    </div>
  );
};

export default Sidebar;
