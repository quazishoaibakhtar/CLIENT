import React from "react";
import "../style.css/Hero.css";
import img2 from "../images/photo1666714848-1024x576.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 220 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="Hero">
      <div className="container">
        <div className="text-btn">
          <motion.div
            className="textup"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={variants}
            viewport={{ once: true }}
          >
            The Road To Physical Therapy Mastery: Learn The Essential Components
            That Make You Stand Out
          </motion.div>
          <motion.div
            className="chotatext"
            initial={{ opacity: 0, y: 90 }}
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={variants}
            animateOnce={true}
            viewport={{ once: true }}
          >
            It's a world which brings the most advanced and quality courses
            related to Physiotherapy and healthcare. Top national and
            international lecturers who are experts in their fields to provide
            you the best CPD courses at the most affordable cost.
          </motion.div>
          <button className="btn">EXPLORE NOW</button>
        </div>

        <img className="heroimg" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
