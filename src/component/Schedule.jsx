import React from "react";
import "../style.css/Schedule.css";
import imgb from "../images/8-300x225.jpg";
import imgc from "../images/6-300x210.jpg";
import { motion } from "framer-motion";

const Schedule = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <div className="schedule">
        <motion.div
          className="ours-upA"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          Scheduled Courses
        </motion.div>
        <motion.div
          className="ours-downA"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          We are coming to upgrade your skills near you.{" "}
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
        <button className="previous">
          « Previous &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; Next »
        </button>
        <div className="lod">
          <button className=" Schedule ">Check All Schedule Cources</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
