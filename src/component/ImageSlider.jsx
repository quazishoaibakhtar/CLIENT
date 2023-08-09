

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style.css/styles.css"

function ImageSlider() {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
  <div className="main-div">
    <Carousel responsive={responsive}
      autoPlay={true}          // Enable auto-play
      autoPlaySpeed={3000}>
  
    <div className="box">
      <img className="DRS" src="https://physioneedsacademy.com/wp-content/uploads/2022/09/2-1.png" alt="" />
      <h2>Dr. Chaksu Bansal</h2>
    </div>
 
    <div className="box">
      <img  className="DRS"  src="https://physioneedsacademy.com/wp-content/uploads/2023/01/Dr-Pankaj-Surange-2.png" alt="" />
      <h2>Dr Krishna</h2>
    </div>
    <div className="box">
      <img className="DRS"  src="https://physioneedsacademy.com/wp-content/uploads/2022/09/6-1.png" alt="" />
      <h2>Dr. Nishant</h2>
    </div>
    <div className="box">
      <img className="DRS"  src="https://physioneedsacademy.com/wp-content/uploads/2022/09/4-1.png" alt="" />
      <h2>Dr. Pankaj</h2>
    </div>
    <div className="box">
      <img className="DRS"  src="https://physioneedsacademy.com/wp-content/uploads/2023/01/13.png" alt="" />
      <h2>Dr. Hassan</h2>
    </div>
</Carousel>
  </div>
  );
}

export default ImageSlider;
