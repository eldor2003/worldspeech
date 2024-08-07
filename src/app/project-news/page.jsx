import React from "react";
import "../../styles/project-news.css";

import ProjectNewsSwiper from "@/components/projectNewsSwiper";

const ProjectNews = () => {
  return (
    <div className="project__news">
      <div className="container">
        <div className="section-title">Новости проекта</div>
        <ProjectNewsSwiper />

        <div className="project_cards"></div>
      </div>
    </div>
  );
};

export default ProjectNews;
