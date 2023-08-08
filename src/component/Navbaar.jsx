import React from "react";
import logo from "../images/image-300x210.jpg"
import { FaAngleDown } from 'react-icons/fa'
import "../style.css/Navbaar.css"

const Navbaar = () => {

  //   const imageWidth = 300;
  // const imageHeight = 210;
  return (
  <div>
    <div className="nav">
    <div className="logo-text">
    <img src={logo}  alt="" />
    <div className="phtext">Physioneeds Academy	</div>
    </div>
    <div >
        <ul className="select">
            <li>Home</li>
            <li>SELECT  <FaAngleDown /></li>
            <li>COURSES <FaAngleDown /></li>
            <li>MEMBERS <FaAngleDown /></li>
            <li>VERIFY <FaAngleDown /></li>
            <li>OTHERS <FaAngleDown /></li>
        </ul>
    </div>
    </div>
   
    
  </div>
  );
};

export default Navbaar;
