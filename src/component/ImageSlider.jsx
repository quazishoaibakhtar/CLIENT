import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const cards = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 3", content: "Content for Card 3" },
    { title: "Card 4", content: "Content for Card 3" },
    { title: "Card 5", content: "Content for Card 3" },
    // Add more cards as needed
  ];
  return (
    <div
      className="carousel-container"
      style={{ padding: "2rem", width: "80%", marginInline: "auto" }}
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

export default ImageSlider;
