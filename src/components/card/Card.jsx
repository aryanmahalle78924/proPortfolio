import React from "react";
import "./card.css";

const Card = ({ img, title, description }) => {
  return (
    <div className="Card">
      <div className="wrap"></div>
      <div className="card">
        <img src={img} className="cardImg" />
        <h4 className="cardHead">{title}</h4>
        <p className="cardPara">{description}</p>
        <a href="#" className="link">
          SEE PROJECT
        </a>
      </div>
    </div>
  );
};

export default Card;
