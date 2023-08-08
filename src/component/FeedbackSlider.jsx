import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const FeedbackSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const cards = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 3", content: "Content for Card 3" },

    // Add more cards as needed
  ];
  return (
    <div
      className="carousel-container"
      style={{ width: "40%", marginInline: "auto" }}
    >
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card title={card.title} content={card.content} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
