import React from "react";
import banner from "../../assest/Images/banner.jpg";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="banner__box">
      {/* <img height="657px" src={banner} /> */}
      <div className="content__banner">
        <h2>
          가드시그니처로 <br /> 온라인 계약 하세요.
        </h2>
        <span>
          비즈니스 성공을 위한 첫 걸음을 가드 시그니처와 <br />
          함께 시작하세요. 모든 계약을 쉽고 간단하게 처리할 수 있고, <br />
          온라인으로 빠르게 해결할 수 있습니다. <br/>
        </span>
        <a><b>지금 확인하기</b>  <i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
      </div>
    </div>
  );
};

export default Banner;
