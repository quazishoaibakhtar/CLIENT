import React from "react";
import "../style.css/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer1">
        <div className="ours-upAB">Let's Connect</div>
        <div className="ours-downAB">We would love to hear from you..!! </div>
        <div className="inb">
          <input type="text" />
          <button>subscribe</button>
        </div>
      </div>

      <div className="footer2">
        <div>
          <img
            src="https://physioneedsacademy.com/wp-content/uploads/2022/08/logo-physioneeds.png"
            alt=""
          />{" "}
          <button>Book Workshop</button>
        </div>
        <div className="col">
          <a href="">COURSES</a>
          <a href="">Dry Needling</a>
          <a href="">CSTMT</a>
          <a href="">A to Z Knee</a>
          <a href="">Tapedia</a>
        </div>
        <div className="col">
          <a href="">TRAINERS</a>
          <a href="">Dr Chaksu</a>
        </div>
        <div className="col">
          <a href="">RESOURCES</a>
          <a href="">Term of Service</a>
          <a href="">Privacy policy</a>
          <a href="">Cookie policy</a>
        </div>
        <div className="col">
          <a href="">SOCIAL</a>
          <a href=""><i class="fa fa-facebook-square"></i> Facebook</a>
          <a href=""><i class="fa fa-instagram"></i> Instagram</a>
          <a href=""><i class='fab fa-twitter-square'></i> twitter</a>
          <a href=""><i class="fa fa-linkedin-square"></i> Linked In</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
