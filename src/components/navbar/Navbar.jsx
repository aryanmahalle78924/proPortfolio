import React from "react";
import "./navbar.css";
import Pic from "../../assets/profile-pic.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Education</li>
        <li>Achievements</li>
        <li>Hobbies</li>
        <li>Contact</li>
      </ul>
      <div className="img_wrapper">
        <img src={Pic} alt="pic" />
      </div>
    </div>
  );
};

export default Navbar;
