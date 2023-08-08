import React from "react";
import "../style.css/Section.css";
import { motion } from "framer-motion";

import imgb from "../images/8-300x225.jpg";
import imgc from "../images/6-300x210.jpg";

const Section = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <div className="sec">
        <motion.div
          className="ours-up"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          Our Courses
        </motion.div>
        <motion.div
          className="ours-down"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          80% hands on practice makes the Physioneeds courses easy to understand
          and apply{" "}
        </motion.div>
        <motion.div
          className="ours-down2"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          clinically immediately post course completion.
        </motion.div>
        <motion.div
          className="ours-down3"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          Choose Yours!!
        </motion.div>

        <motion.div
          className="cards"
          initial={{ opacity: 0, y: 250 }}
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          <div className="card">
            <img
              className="image"
              src="https://physioneedsacademy.com/wp-content/uploads/2022/09/sportsphysiotherapistinkarennairobikneepain-300x200.jpg"
              alt=""
            />
            <div className="tabedia">TAPEDIA</div>
            <div className="tabedia-hand">TAPEDIA Hands-on Course Details</div>
            <button className="btn1">READ MORE »</button>
          </div>
          <div className="card">
            <img className="image" src={imgb} alt="" />

            <div className="sta">STATIC & DYNAMIC</div>
            <div className="neu">NEUROMUSCULAR</div>
            <div className="stab">STABILIZATION (SDNS)</div>
            <div className="small-text">
              <div>
                STATIC & DYNAMIC NEUROMUSCULAR STABILIZATION (SDNS) Hands-on
                Course Details
              </div>
            </div>

            <button className="btnread">READ MORE »</button>
          </div>
          <div className="card">
            <img className="image" src={imgc} alt="" />
            <div className="tabedia">TAPEDIA</div>
            <div className="tabedia-hand">TAPEDIA Hands-on Course Details</div>
            <button className="btn1">READ MORE »</button>
          </div>
        </motion.div>
        <div className="lod">
          {" "}
          <button className="loadmore">LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
