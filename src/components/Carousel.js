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
        <img width="100%" src="https://image-cdn-flare.qdm.cloud/q58b13f2641cf3/image/data/2021/06/07/10bda239f10a50f99474b6476ee314d7.jpg" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://image-cdn-flare.qdm.cloud/q58b13f2641cf3/image/data/2021/06/03/5c51d5180bb77398c11b6f36774ec439.jpg" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://image-cdn-flare.qdm.cloud/q58b13f2641cf3/image/data/2021/06/03/669bfe45fae44e8adc6347ca6600a9b2.jpg" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://image-cdn-flare.qdm.cloud/q58b13f2641cf3/image/data/2021/06/04/02ddf376483ecc2c61ddfe0f4c45c5fe.jpg" alt="test" />
      </div>
      {/* <div>
        <img width="100%" src="https://picsum.photos/1004/300" alt="test" />
      </div>
      <div>
        <img width="100%" src="https://picsum.photos/1005/300" alt="test" />
      </div> */}
    </Slider>
  );
}
