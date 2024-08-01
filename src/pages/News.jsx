import SwiperNewsComponent from "@/components/SwipperNewsComponent";
import React from "react";
import "../styles/news.css";

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="section-title">Новости проекта</div>

        <div className="news__cards">
          <SwiperNewsComponent />
        </div>
        <div className="btns">
          <button className="btn-outline all-view">Смотреть все</button>
        </div>
      </div>
    </div>
  );
};

export default News;
