import React from "react";
import Bg from "../../assets/bg.png";
import Date from "../dates/Date";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <img src={Bg} />
        <h1 className="aboutTitle">
          My
          <br />
          Main
          <br />
          Hustle
        </h1>
      </div>
      <div className="right">
        <Date />
        <Date />
      </div>
    </div>
  );
};

export default About;
