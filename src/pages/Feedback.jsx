import FeedbackCard from "@/components/Feedback__card";
import React from "react";

import "../styles/feedback.css";
import SwiperFeedbackComponent from "@/components/SwiperFeedbackComponent";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="container">
        <div className="section-title">Мнения наших клиентов</div>

        <div className="feedback__cards">
          <SwiperFeedbackComponent />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
