import React from "react";
import "../style.css/Article.css";
import { motion } from "framer-motion";

const Article = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="Artcle">
      <motion.div
        className="ours-upA"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        6 Reasons To Take Our Courses
      </motion.div>
      <div className="Alltext">
      <motion.div
        className="ours-downA"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        We believe that everyone has a talent, ability or skill that he can mine{" "}
      </motion.div>
      <motion.div
        className="ours-down2A"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        to support himself and to succeed in life.
      </motion.div>
      <motion.div
        className="ours-down3A"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        And We make it HAPPEN..!!
      </motion.div>
      </div>
      <motion.div
        className="batches"
        initial={{ opacity: 0, y: 250 }}
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        <div className="batch">
          <div>
            <img
              className="immg"
              src="https://physioneedsacademy.com/wp-content/uploads/2023/04/1.png"
              alt=""
            />
          </div>

          <div>
            <div className="t1">Lifetime Guidance​</div>
            <div className="t2">We help you through the</div>
            <div className="t3">journey of healing the world.</div>
          </div>
        </div>

        <div className="batch">
          <div>
            <img
              className="immga"
              src="https://physioneedsacademy.com/wp-content/uploads/2023/04/2.png"
              alt=""
            />
          </div>

          <div>
            <div className="t1a">Trained More Than 20K Professionals​​</div>
            <div className="t2b">Cherishing the faith of</div>
            <div className="t3c">professionals worldwide for</div>
            <div className="t4d">making us the choice for CPD.</div>
          </div>
        </div>
        <div className="batch">
          <div>
            <img
              className="immg"
              src="https://physioneedsacademy.com/wp-content/uploads/2023/04/3.png"
              alt=""
            />
          </div>

          <div>
            <div className="t1">Simplified and Practical​</div>
            <div className="t2">Courses are designed in the</div>
            <div className="t3">simplest manner, result oriented</div>
            <div className="t4">and hands on approach.</div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="batches"
        initial={{ opacity: 0, y: 250 }}
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={variants}
        viewport={{ once: true }}
      >
        <div className="batch">
          <div>
            <img
              className="immg"
              src="https://physioneedsacademy.com/wp-content/uploads/2023/04/4.png"
              alt=""
            />
          </div>

          <div>
            <div className="t1">Internationally Valid​</div>
            <div className="t2">Courses are of International</div>
            <div className="t3">standards with validity across</div>
            <div className="t4">the globe.</div>
          </div>
        </div>

        <div className="batch">
          <div>
            <img
              className="immg"
              src="https://physioneedsacademy.com/wp-content/uploads/2023/04/5.png"
              alt=""
            />
          </div>

          <div>
            <div className="t1">Comprehensive Programs​</div>
            <div className="t2">All our courses provides you in-</div>
            <div className="t3">depth knowledge and instant</div>
            <div className="t4">result oriented techniques.</div>
          </div>
        </div>
        <div className="batch">
          <div>
            <img
              className="immg"
              src="https://physioneedsacademy.com/wp-content/uploads/2023/04/6.png"
              alt=""
            />
          </div>

          <div>
            <div className="t1">Easy Payments​</div>
            <div className="t2">We understand the constraint of</div>
            <div className="t3">one time payments hence providing</div>
            <div className="t4">you easy EMIs.</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Article;
