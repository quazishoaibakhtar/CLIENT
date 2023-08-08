import React from "react";
import "../style.css/Status.css";
import ImageSlider from "./ImageSlider";

const Status = () => {
  return (
    <div>
      <div className="status">
        <div className="ours-upA">Know Your Instructors</div>
        <div className="ours-downA">
          We teach the way you learn and interaction with the experts as you
          require to learn the concept.{" "}
        </div>
        <div className="carousel">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Status;
