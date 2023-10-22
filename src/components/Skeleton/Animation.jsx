import React from "react";

const Animation = ({ darkMode }) => {
  return (
    <div className="card">
      <div className={`planet planet1 ${darkMode ? "dark-mode" : ""}`}></div>
      <div className={`planet planet2 ${darkMode ? "dark-mode" : ""}`}></div>
      <div className={`planet planet3 ${darkMode ? "dark-mode" : ""}`}></div>
      <div className={`planet planet4 ${darkMode ? "dark-mode" : ""}`}></div>
      <div className={`planet planet5 ${darkMode ? "dark-mode" : ""}`}></div>
      <div className={`planet planet6 ${darkMode ? "dark-mode" : ""}`}></div>
      <div className={`planet planet7 ${darkMode ? "dark-mode" : ""}`}></div>
    </div>
  );
};

export default Animation;

