// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Card from "./Card";

// const ImageSlider = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
    
//   };
//   const cards = [
//     { title: "Card 1", content: "Content for Card 1" },
//     { title: "Card 2", content: "Content for Card 2" },
//     { title: "Card 3", content: "Content for Card 3" },
//     { title: "Card 4", content: "Content for Card 3" },
//     { title: "Card 5", content: "Content for Card 3" },
//     // Add more cards as needed
//   ];
//   return (
//     <div
//       className="carousel-container"
//       style={{ padding: "2rem", width: "80%", marginInline: "auto" }}
//     >
//       <Slider {...sliderSettings}>
//         {cards.map((card, index) => (
//           <div key={index}>
//             <Card title={card.title} content={card.content} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import "../style.css/Cardcaro.css"
const ImageSlider = () => {

  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Changed to 1 for individual card scroll
    autoplay: true, // Auto-moving slider
    
    autoplaySpeed: 3000, // Time between auto slides
    nextArrow: <div className="custom-next-arrow"><i class='fas fa-angle-left'></i></div>,
    prevArrow: <div className="custom-prev-arrow"><i class='fas fa-angle-right'></i></div>,
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
      style={{ padding: "2rem", width: "90%", margin: "auto",   }}
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

export default ImageSlider;
