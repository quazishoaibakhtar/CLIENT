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
      <div className="schedule99">
        <motion.div
          className="ours-upA99"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          Scheduled Courses
        </motion.div>
        <motion.div
          className="ours-downA99"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          We are coming to upgrade your skills near you.{" "}
        </motion.div>

        <motion.div
          className="cards99"
          initial={{ opacity: 0, y: 250 }}
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={variants}
          viewport={{ once: true }}
        >
          <div className="card99">
            <img
              className="image99"
              src="https://physioneedsacademy.com/wp-content/uploads/2022/09/sportsphysiotherapistinkarennairobikneepain-300x200.jpg"
              alt=""
            />
            <div className="tabedia99">TAPEDIA</div>
            <div className="tabedia-hand99">TAPEDIA Hands-on Course Details</div>
            <button className="btn199">READ MORE »</button>
          </div>
          <div className="card99">
            <img className="image99" src={imgb} alt="" />
            <div className="tabedia99">TAPEDIA</div>
            <div className="tabedia-hand99">TAPEDIA Hands-on Course Details</div>
            <button className="btn199">READ MORE »</button>
            {/* <div className="sta99">STATIC & DYNAMIC</div>
            <div className="neu99">NEUROMUSCULAR</div>
            <div className="stab99">STABILIZATION (SDNS)</div>
            <div className="small-text99">
              <div>
                STATIC & DYNAMIC NEUROMUSCULAR STABILIZATION (SDNS) Hands-on
                Course Details
              </div>
            </div>

            <button className="btnread99">READ MORE »</button> */}
          </div>
          <div className="card99">
            <img className="image99" src={imgc} alt="" />
            <div className="tabedia99">TAPEDIA</div>
            <div className="tabedia-hand">TAPEDIA Hands-on Course Details</div>
            <button className="btn199">READ MORE »</button>
          </div>
        </motion.div>
        <button className="previous99">
          « Previous &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; Next »
        </button>
        <div className="lod99">
          <button className=" Schedule99 ">Check All Schedule Cources</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
