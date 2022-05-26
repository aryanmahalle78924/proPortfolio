import React from "react";
import "./footer.css";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="footerWrap">
          <div className="content">
            <h1 className="footerHead">Contact</h1>

            <a href="#" className="footerDes">
              rachelgreen@gmail.com
            </a>
            <div className="social">
              <img src={Instagram} />
              <img src={Youtube} />
              <img src={Facebook} />
            </div>
          </div>
        </div>
      </div>
      <div className="right">All rights reserved.</div>
    </div>
  );
};

export default Footer;
