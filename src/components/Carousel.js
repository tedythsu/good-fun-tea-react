// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./Slide.jpg";

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
  };
  return (
    <Slider {...settings}>
      <div>
        <img width="100%" src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="test" />
      </div>
      <div>
        <img width="100%" src={logo} alt="test" />
      </div>
      <div>
        <img width="100%" src={logo} alt="test" />
      </div>
      <div>
        <img width="100%" src={logo} alt="test" />
      </div>
    </Slider>
  );
}
