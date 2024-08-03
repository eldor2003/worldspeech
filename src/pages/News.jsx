import SwiperNewsComponent from "@/components/SwipperNewsComponent";
import React from "react";
import "../styles/news.css";

const News = () => {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-title">Новости проекта</div>

        <div className="news__cards">
          <SwiperNewsComponent />
        </div>
        <div className="btns">
          <button className="btn-outline all-view">Смотреть все</button>
        </div>
      </div>
    </section>
  );
};

export default News;
