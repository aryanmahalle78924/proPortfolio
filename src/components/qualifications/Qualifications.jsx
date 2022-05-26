import React from "react";
import "./qualifications.css";

const Qualifications = ({ description }) => {
  return (
    <div className="qualifications">
      <div className="qualiWrap"></div>
      <p className="qualiDescription">{description}</p>
    </div>
  );
};

export default Qualifications;
