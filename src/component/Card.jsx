// Card.js
import React from "react";
import "../style.css/Cardcaro.css"

const Card = ({ title, content,image }) => {
  return (
    <div
      className="card"
      style={{ width: "500px", height: "500px", color: "black", }}
    >
      
      <img className="caroimg" src= {image} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
