import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__title">
          Преобразуем аудио в текст: <br /> онлайн-встречи, звонки, файлы
        </div>
        <p className="hero__lang">Более 99+ доступных языков</p>
        <div className="hero__icons">
          <img src="camera-icon.svg" alt="camera" />
          <img src="zoom-icon.svg" alt="camera" />
          <img src="meeting-icon.svg" alt="camera" />
        </div>

        <div className="btns">
          <button className="btn btn-primary">Начать транскрибацию</button>
        </div>

        <div className="hero__how">
          <div className="hero__how--title">Как работает WorldspeechAI?</div>
          <div className="hero__how--descr">
            Наш бот подключится к вашей встрече и автоматически запишет важный
            разговор, преобразует аудио в текст и подготовит отчет
          </div>
          <div className="hero__how__items">
            <div className="hero__how--item">
              <div className="hero__how--item__content">
                <div className="hero__how--item__number">1</div>
                <div className="hero__how--item__title">
                  Загрузка файла/ <br /> Подключение к встречи
                </div>
              </div>
              <div className="hero__how--item__icon">
                <img src="cloud-upload.svg" alt="svg" />
              </div>
            </div>
            <div className="hero__how--item">
              <div className="hero__how--item__content">
                <div className="hero__how--item__number">2</div>
                <div className="hero__how--item__title">
                  Ожидание <br /> расшифровки
                </div>
              </div>
              <div className="hero__how--item__icon">
                <img src="waiting-icon.svg" alt="svg" />
              </div>
            </div>
            <div className="hero__how--item">
              <div className="hero__how--item__content">
                <div className="hero__how--item__number">3</div>
                <div className="hero__how--item__title">
                  Скачивание <br /> результата
                </div>
              </div>
              <div className="hero__how--item__icon">
                <img src="download.svg" alt="svg" />
              </div>
            </div>
          </div>

          <div className="btns">
            <button className="btn btn-primary">Начать бесплатно</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
