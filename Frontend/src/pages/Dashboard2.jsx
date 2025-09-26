import React from "react";
import "./Dashboard2.css";
import MicIcon from "../components/Icons/MicIcon";
import SendIcon from "../components/Icons/SendIcon";

const Dashboard2 = () => {
  return (
    <div className="dashboard-container">
      <div className="left-panel">
        <div>
          <div className="dashboard-title">Dashboard-2</div>
          <img
            src="https://i.pravatar.cc/60"
            alt="Profile"
            className="profile-picture"
          />
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="What would you like to change?"
          />
          <div className="chat-icons">
            <MicIcon />
            <SendIcon />
          </div>
        </div>
      </div>
      <div className="right-panel"></div>
    </div>
  );
};

export default Dashboard2;
