import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "../../assest/Images/brand1.jpg";
import brand2 from "../../assest/Images/brand2.jpg";
import brand3 from "../../assest/Images/brand3.jpg";
import brand4 from "../../assest/Images/brand4.jpg";
import brand5 from "../../assest/Images/brand5.jpg";
import brand6 from "../../assest/Images/brand6.jpg";
import "./BrandSlider.css";

const BrandSlider = (props) => {
  const settings = {
    dots: true,
    autoplay: 3000,
    centerMode: true,
    centerPadding: '180px',
    speed: 500,
    slidesToShow: 4,
    slidesToSroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          centerMode:false,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="brand__wrap">
      <div className="brand__title">
          <h2>많은 우수 기업과 함께 하고 있습니다.</h2>
          <span>가드 시그니처를 믿고 신뢰하는 고객사들이 있습니다.</span>
      </div>
      <Slider  className="brand__slider" {...settings}>
        <div>
          <img src={brand1}/>
        </div>
        <div>
          <img src={brand2}/>
        </div>
        <div>
          <img src={brand3}/>
        </div>
        <div>
          <img src={brand4}/>
        </div>
        <div>
          <img src={brand5}/>
        </div>
        <div>
          <img src={brand6}/>
        </div>
      </Slider>
    </div>
  );
};

export default BrandSlider;
