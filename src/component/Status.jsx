import React from "react";
import "../style.css/Status.css";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";

const Status = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <div className="status">
        <motion.div
          className="ours-upA"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          Know Your Instructors
        </motion.div>
        <motion.div
          className="ours-downA"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          We teach the way you learn and interaction with the experts as you
          require to learn the concept.{" "}
        </motion.div>
        <motion.div
          className="carousel"
          initial={{ opacity: 0, y: 250 }}
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          <ImageSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Status;
