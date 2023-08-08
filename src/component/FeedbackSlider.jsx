import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const FeedbackSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    
    slidesToScroll: 1, // Changed to 1 for individual card scroll
    autoplay: true, // Auto-moving slider
    
    autoplaySpeed: 3000,
  };
  const cards = [
    { title: "Card 1", content: "Content for Card 1", img:'https://physioneedsacademy.com/wp-content/uploads/2023/01/Dr-Pankaj-Surange-2.png', },
    { title: "Card 2", content: "Content for Card 2", img:'https://physioneedsacademy.com/wp-content/uploads/2022/09/6-1.png', },
    { title: "Card 3", content: "Content for Card 3", img: 'https://physioneedsacademy.com/wp-content/uploads/2022/09/2-1.png' },
    { title: "Card 4", content: "Content for Card 4", img: 'https://physioneedsacademy.com/wp-content/uploads/2023/01/13.png' },
    { title: "Card 5", content: "Content for Card 5", img: 'https://physioneedsacademy.com/wp-content/uploads/2022/09/4-1.png' },

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
            <Card title={card.title} content={card.content} image={card.img}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
