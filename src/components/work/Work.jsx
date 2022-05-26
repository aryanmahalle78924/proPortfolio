import React from "react";
import Card from "../card/Card";
import Recipe from "../../assets/recipe.png";
import Emoji from "../../assets/emoji.png";
import Guess from "../../assets/guess-the-number.png";
import Rock from "../../assets/rock-paper-scissors.png";
import Pokemon from "../../assets/pokemon.png";
import Bday from "../../assets/e-birthday-card.png";
import "./work.css";

const Work = () => {
  return (
    <div className="work">
      <h1 className="workTitle">My Work</h1>
      <p className="workPara">
        “I love coding & ever since I took up ProGrad Junior, I’ve built some
        cool projects.
        <br />
        I’ve also picked up HTML, CSS & JavaScript”
      </p>
      <div class="grid-container">
        <Card
          img={Recipe}
          title={"Recipe Web Page"}
          description={"I built a Dalgona Coffee Recipe page using HTML & CSS."}
        />

        <Card
          img={Emoji}
          title={"My Fav Emojis"}
          description={
            "I created my favorite emojis & cartoons using CSS only."
          }
        />

        <Card
          img={Guess}
          title={"Guess the Number"}
          description={"I built guess the number game using JavaScript."}
        />

        <Card
          img={Rock}
          title={"Rock Paper Scissors"}
          description={"I made a virtual rock paper scissors game using JS."}
        />

        <Card
          img={Pokemon}
          title={"Pokemon Game"}
          description={"I built the Pokemon based game using HTML, CSS & JS."}
        />

        <Card
          img={Bday}
          title={"E-birthday Card"}
          description={"I’ve built my own e-birthday card using JS."}
        />
      </div>
    </div>
  );
};

export default Work;
