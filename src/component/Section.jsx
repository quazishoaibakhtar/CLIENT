import React from "react";
import "../style.css/Section.css"

import imgb from "../images/8-300x225.jpg"
import imgc from "../images/6-300x210.jpg"

const Section = () => {
  return( 
  <div>
    <div className="sec">
        
            <div className="ours-up">Our Courses</div>
            <div className="ours-down">80% hands on practice makes the Physioneeds courses easy to understand and apply  </div>
<div className="ours-down2">clinically immediately post course completion.</div>
<div className="ours-down3">
Choose Yours!!</div>
        
        <div className="cards">
            <div className="card">
                <img className="image" src="https://physioneedsacademy.com/wp-content/uploads/2022/09/sportsphysiotherapistinkarennairobikneepain-300x200.jpg" alt="" />
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
               
                <div>STATIC & DYNAMIC NEUROMUSCULAR
STABILIZATION (SDNS) Hands-on Course Details</div>
                </div>
                
                <button className="btnread">READ MORE »</button>
            </div>
            <div className="card">
                <img className="image" src={imgc} alt="" />
                <div className="tabedia">TAPEDIA</div>
                <div className="tabedia-hand">TAPEDIA Hands-on Course Details</div>
                <button className="btn1">READ MORE »</button>
            </div>
        </div>
        <div className="lod">  <button className="loadmore">LOAD MORE</button></div>
      
    </div>
    
    </div>
  );
};

export default Section;
