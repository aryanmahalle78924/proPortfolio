import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.css";

import Info from "../info/Info";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper"></div>
      <Navbar />
      <div className="homeContainer">
        <Info />
      </div>
    </div>
  );
};

export default Home;
