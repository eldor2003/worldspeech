import MeetingForm from "@/components/MeetingForm";
import Sidebar from "@/components/SideBar";
import React from "react";

import "../../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <Sidebar />
        <div className="dashboard__main">
          <MeetingForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
