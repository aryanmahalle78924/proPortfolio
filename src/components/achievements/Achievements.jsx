import React from "react";
import Qualifications from "../qualifications/Qualifications";
import "./achievements.css";

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="left">
        <div class="grid-container">
          <Qualifications description={"Topped my class with a CPGA of 9.2."} />
          <Qualifications
            description={
              "Was awarded ‘Best Performer of the Batch 2018’ for consistent performance in academic for 3 consequetive years."
            }
          />
          <Qualifications
            description={
              "Currently, taking up “ProGrad Junior Certification Program”. Links to some of my projects - https://github.io/rachel/game1"
            }
          />
          <Qualifications
            description={
              "Vice Captain, Sports Club of Sunbeam SSC. Bagged several prizes in Running (100 m), Dodge ball, Archery, Regional Badminton tournaments etc."
            }
          />
          <Qualifications
            description={
              "Member of #include - A global coding club for passionate coders"
            }
          />
        </div>
      </div>
      <div className="right">
        <div className="achieveWrap">
          <h1 className="achievementHeader">
            I’m
            <br />
            Proud
            <br />
            Of
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
