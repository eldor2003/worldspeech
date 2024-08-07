// src/components/MeetingForm.js
import React from "react";
import "../styles/meetingForm.css";
import Link from "next/link";

const MeetingForm = () => {
  return (
    <div className="dashbord__content">
      <div className="dashbord__content--left">
        <h2 className="section-title">Новая встреча</h2>
        <div className="dashbord__content--left__description">
          <b>Загрузить аудио/видео файл встречи</b>
          <p className="date">
            Обработка займет от 5 до 10 минут, и отчет будет доступен в списке
            ваших встреч
          </p>
        </div>
        <div className="upload-section">
          <div className="file__upload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="111"
              height="111"
              viewBox="0 0 111 111"
              fill="none"
            >
              <path
                d="M32.5835 83.2006C26.8648 83.2006 21.3803 81.0276 17.3365 77.1596C13.2928 73.2917 11.021 68.0456 11.021 62.5756C11.021 57.1055 13.2928 51.8594 17.3365 47.9915C21.3803 44.1235 26.8648 41.9506 32.5835 41.9506C33.9341 35.9335 37.8853 30.6457 43.5679 27.2505C46.3816 25.5694 49.5356 24.4035 52.85 23.8194C56.1643 23.2353 59.574 23.2445 62.8844 23.8464C66.1948 24.4483 69.3411 25.6311 72.1436 27.3273C74.9461 29.0236 77.3499 31.2 79.2178 33.7323C81.0857 36.2646 82.3812 39.1033 83.0301 42.0862C83.6791 45.0691 83.6689 48.1379 83.0002 51.1172H87.5835C91.838 51.1172 95.9183 52.8073 98.9267 55.8157C101.935 58.8241 103.625 62.9044 103.625 67.1589C103.625 71.4134 101.935 75.4937 98.9267 78.5021C95.9183 81.5105 91.838 83.2006 87.5835 83.2006H83.0002M41.7504 69.4508L55.5004 55.7008M55.5004 55.7008L69.2504 69.4508M55.5004 55.7008V96.9508"
                stroke="#121212"
                stroke-width="3.03141"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label htmlFor="file" className="btn btn-primary">
              Загрузить файлы
            </label>
            <input type="file" id="file" className="none" />
            <p className="drag__and__drop">Или перетащите файлы сюда</p>
            <label htmlFor="spekers" className="spekers">
              <input type="checkbox" name="spekers" id="spekers" />
              Разделение на спикеров
            </label>
            <p className="file__type">
              Аудиоформаты: MP3, M4A, OGG, WAV, WMA, M4A
            </p>
          </div>
        </div>
      </div>
      <div className="dashbord__content--right">
        <div className="meeting-form">
          <div className="conference-section">
            <h3>Отправить бота на конференцию</h3>
            <p className="descr">
              Наш бот подключится к вашей встрече и автоматически запишет важный
              разговор, преобразует аудио в текст и подготовит отчет
            </p>
            <form>
              <label>
                Название
                <input
                  type="text"
                  placeholder="Например: Созвон с Ильей по сайту"
                />
              </label>
              <label>
                Площадка
                <select>
                  <option>Telemost</option>
                </select>
              </label>
              <label>
                Ссылка на конференцию
                <input type="text" placeholder="Zoom, Google Meet, Telemost" />
              </label>
              <label>
                Пароль
                <input type="password" placeholder="Только для Zoom" />
              </label>
              <div className="row row1">
                <Link href={"#!"}>Только для Zoom</Link>

                <span>Если нету, оставьте поле пустым</span>
              </div>
              <div className="row row2">
                <button className="btn-primary">Отправить</button>
                <div className="links">
                  <Link href={"#!"}>
                    <img src="camera-icon.svg" alt="camera" />
                  </Link>
                  <Link href={"#!"}>
                    <img src="zoom-icon.svg" alt="camera" />
                  </Link>
                  <Link href={"#!"}>
                    <img src="meeting-icon.svg" alt="camera" />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingForm;
