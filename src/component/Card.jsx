// Card.js
import React from "react";

const Card = ({ title, content }) => {
  return (
    <div
      className="card"
      style={{ width: "500px", height: "300px", color: "black" }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
