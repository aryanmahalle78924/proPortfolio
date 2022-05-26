import React from "react";
import "./hobbies.css";
import Guitar from "../../assets/guitar.png";
import Friends from "../../assets/friends.png";
import Badminton from "../../assets/badminton.png";
import Painting from "../../assets/painting.png";
import Reading from "../../assets/reading.png";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <div className="left">
        <h1 className="hobbyTitle">
          My
          <br />
          Side
          <br />
          Hustle
        </h1>
        <p className="hobbyDescription">
          When I’m free, you’ll find me doing one of these.
          <br />
          Honestly, I hate to laze around!
        </p>
      </div>
      <div className="right">
        <div className="gridContainer">
          <img src={Guitar} alt="guitar" />
          <img src={Friends} alt="guitar" />
          <img src={Painting} alt="guitar" />
          <img src={Badminton} alt="guitar" />
          <img src={Reading} alt="guitar" />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
