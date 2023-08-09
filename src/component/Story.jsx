import React from "react";
import "../style.css/Story.css";
import { motion } from "framer-motion";


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
        Well...!! We don't boast about ourselves. Our fellow professionals have something to share <br />
        with you for your good.{" "}
      </motion.div>

      <div className="containerxy" >
        
     
      <video controls style={{ width: "320px", height: "400px" }}>
        <source src={"../videoes/physiotherapy video1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
  
  <div className="midtext">
   <div className="firtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi numquam eveniet earum reiciendis ab dolores est laudantium eum repellendus et, molestiae illum atque culpa, ex deserunt quis voluptas libero.</div>
   <h1 className="secondtext">Anas Khan</h1>
  </div>
    
      
      
      <video controls style={{ width: "320px", height: "400px" }}>
        <source src={"../videoes/pexels-rodnae-productions-6130538 (1080p).mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      </div>
    </div>
  );
};

export default Story;
