import React, { useState } from "react";

const NewsCard = ({ img, name, date, descr }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const descriptionFunction = (descr) => {
    const words = descr.split(" ");
    if (words.length > 36 && !isExpanded) {
      const shortDescr = words.slice(0, 36).join(" ");
      return `${shortDescr}...`;
    }
    return descr;
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="news__card">
      <img src={img} alt="" />
      <div className="news__card--content">
        <div className="news__card--name">{name}</div>
        <div className="news__card--date">{date}</div>
        <div className="news__card--descr">{descriptionFunction(descr)}</div>
        <button className="news__card--btn" onClick={handleClick}>
          {isExpanded ? "Скрыть" : "Посмотреть полностью"}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
