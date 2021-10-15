import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assest/Images/slide1.jpg";
import img2 from "../../assest/Images/slide2.jpg";
import img3 from "../../assest/Images/slide3.jpg";
import prev from "../../assest/Images/prev.png";
import btnnext from "../../assest/Images/next.png";
import bgSlider from "../../assest/Images/bg-slider.jpg";
import "./SliderBox.css";

const SliderBox = (props) => {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: true,
    // autoplay: 3000,
    infinite: true,
    centerMode: true,
    centerPadding: "501px",
    speed: 500,
    slidesToShow: 1,
    slidesToSroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          centerMode:false,
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="box_slider">
      <div className="wraper_slider">
        <div className="content-slider">
          <h2>
            짧고 간단한 절차 <br />
            지금 직접 확인해보세요
          </h2>
        </div>
        <div className="box_action">
          <img className="bg-slider" src={bgSlider} />
          <div className="action_block">
            <button onClick={previous}>
              <img src={prev} />
            </button>
            <button onClick={next}>
              <img src={btnnext} />
            </button>
          </div>
          <Slider ref={ref} className="slider" {...settings}>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
          </Slider>
        </div>
      </div>
      <button className="btn_action">
        전자계약 체험하기{" "}
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default SliderBox;
