// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          width="100%"
          src="https://picsum.photos/1000/300"
          alt="test"
        />
      </div>
      <div>
        <img
          width="100%"
          src="https://picsum.photos/1001/300"
          alt="test"
        />
      </div>
      <div>
        <img
          width="100%"
          src="https://picsum.photos/1002/300"
          alt="test"
        />
      </div>
      <div>
        <img width="100%" src="https://picsum.photos/1003/300" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://picsum.photos/1004/300" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://picsum.photos/1005/300" alt="test" />
      </div>
    </Slider>
  );
}
