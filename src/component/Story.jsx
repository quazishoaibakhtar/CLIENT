import React from "react";
import "../style.css/Story.css";
import { motion } from "framer-motion";
import FeedbackSlider from "./FeedbackSlider";
import img1 from "../images/Dr-Pankaj-Surange.jpg";

const Story = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="story">
      <motion.div
        className="ours-upA0"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        What Professionals Say
      </motion.div>
      <motion.div
        className="ours-downA0"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        We teach the way you learn and interaction with the experts as you
        require to learn the concept.{" "}
      </motion.div>

      <div className="container" style={{ width: "65%", margin: "auto" }}>
        <img src={img1} alt="" style={{ width: "270px", height: "400px" }} />
        <FeedbackSlider /> 
        <img src={img1} alt="" style={{ width: "270px", height: "400px" }} />
      </div>
    </div>
  );
};

export default Story;
