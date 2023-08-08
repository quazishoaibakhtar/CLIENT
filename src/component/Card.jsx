// Card.js
import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="card" style={{ width: "400px", height: "400px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
