import React from "react";
import "../style.css/Schedule.css"
import imgb from "../images/8-300x225.jpg"
import imgc from "../images/6-300x210.jpg"

const Schedule = () => {
  return (
  <div>
    <div className="schedule">
   
<div className="ours-upA">Scheduled Courses</div>
      <div className="ours-downA">
      We are coming to upgrade your skills near you.{" "}
</div>

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
        <button className="previous">« Previous &nbsp; 1 &nbsp; 2  &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; Next »</button>
        <div className="lod"> 
        
         <button className=" Schedule ">Check All Schedule Cources</button></div>
    </div>

  </div>
  );
};

export default Schedule;
