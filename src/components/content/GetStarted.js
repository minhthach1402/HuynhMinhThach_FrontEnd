import React from "react";
import "./GetStarted.css";

const GetStarted = (props) => {
  return (
    <div className="get__started">
      <span>지금 바로 시작하세요!</span>
      <h3>
        설명이 필요 없는 간단한 계약 과정, <br />
        직접 경험해보세요!
      </h3>
      <button className="btn_action_getstarted">
        더 살펴보기 <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default GetStarted;
