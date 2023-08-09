import React from "react";
import "../style.css/Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <div className="footer1">
        <motion.div
          className="ours-upAB"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.div>
        <motion.div
          className="ours-downAB"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          We would love to hear from you..!!{" "}
        </motion.div>
        <div className="inb">
          <input type="text" placeholder="Your Email Address" /> <br />
          <button className="sbtn">Subscribe</button>
        </div>
      </div>

      <div className="footer2-container">
        <div className="footer2">
          <div className="logo">
            <img
              src="https://physioneedsacademy.com/wp-content/uploads/2022/08/logo-physioneeds.png"
              alt=""
            />{" "}
            <button>Book Workshop</button>
          </div>
          <div className="col">
            <h3>COURSES</h3>
            <a href="">Dry Needling</a>
            <a href="">CSTMT</a>
            <a href="">A to Z Knee</a>
            <a href="">Tapedia</a>
          </div>
          <div className="col">
            <h3>TRAINERS</h3>
            <a href="">Dr Chaksu</a>
          </div>
          <div className="col">
            <h3>RESOURCES</h3>
            <a href="">Term of Service</a>
            <a href="">Privacy policy</a>
            <a href="">Cookie policy</a>
          </div>
          <div className="col">
            <h3>SOCIAL</h3>
            <a href="">
              <i class="fa fa-facebook-square"></i> Facebook
            </a>
            <a href="">
              <i class="fa fa-instagram"></i> Instagram
            </a>
            <a href="">
              <i class="fab fa-twitter-square"></i> twitter
            </a>
            <a href="">
              <i class="fa fa-linkedin-square"></i> Linked In
            </a>
          </div>
        </div>
        <div className="copyrightText">
          © Copyright 2018 Ashira Foundation trust
        </div>
      </div>
    </div>
  );
};

export default Footer;
