import React from "react";
import "../style.css/Hero.css";
import img2 from "../images/photo1666714848-1024x576.jpeg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="container">
        <div className="text-btn">
          <div className="textup">
          The Road To Physical Therapy Mastery: Learn The Essential Components That Make You Stand Out
          </div>
          <div className="chotatext">
          It's a world which brings the most advanced and quality courses related to Physiotherapy and healthcare. Top national and international lecturers who are experts in their fields to provide you the best CPD courses at the most affordable cost.
          </div>
          <button className="btn">EXPLORE NOW</button>
        </div>

        <img className="heroimg" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
