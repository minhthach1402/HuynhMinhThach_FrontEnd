import React from "react";
import essen1 from "../../assest/Images/essen1.png";
import essen2 from "../../assest/Images/essen2.png";
import essen3 from "../../assest/Images/essen3.png";
import essen4 from "../../assest/Images/essen4.png";
import essen5 from "../../assest/Images/essen5.png";
import essen6 from "../../assest/Images/essen6.png";
import more from "../../assest/Images/next.png";
import "./Essential.css";

const Essential = (props) => {
  return (
    <div className="box_esential">
      <div className="essential_title">
        <h2>다양한 계약서에 필수적 사용</h2>
        <span>
          근로 계약서, 각종 동의서, 입점 계약서, 가맹 계약서, <br />
          용역 계약서, 공급 계약서 이외에도 <br />
          사용 가능한 계약서를 가드 시그니처와 함께 확인해보세요. <br />
        </span>
      </div>
      <div className="essential-items">
        <section>
          <div className="image-items">
            <img src={essen1} />
          </div>
          <div className="content-items">
            <h4>근로 계약서</h4>
            <span>
              근로자가 취업 후 필요로 <br /> 하는 근로 계약서, 연봉 계약서 등
            </span>
          </div>
          <button className="btn_more">
            <img src={more} />
          </button>
        </section>
        <section>
          <div className="image-items">
            <img src={essen2} />
          </div>
          <div className="content-items">
            <h4>각종 동의서</h4>
            <span>
              용도에 따라 필요한 동의서, <br /> 확인서, 신청서 등
            </span>
          </div>
          <button className="btn_more">
            <img src={more} />
          </button>
        </section>
        <section>
          <div className="image-items">
            <img src={essen3} />
          </div>
          <div className="content-items">
            <h4>입점 계약서</h4>
            <span>
              입점 등을 위한 계약 내용을 <br /> 적은 쇼핑몰, 사무실 입점 계약서
              등
            </span>
          </div>

          <button className="btn_more">
            <img src={more} />
          </button>
        </section>
        <section>
          <div className="image-items">
            <img src={essen4} />
          </div>
          <div className="content-items">
            <h4>가맹 계약서</h4>
            <span>
              가맹과 관련된 계약 체결을 위한 <br /> 가맹 [프랜차이즈], 대리점
              계약서 등
            </span>
          </div>
          <button className="btn_more">
            <img src={more} />
          </button>
        </section>
        <section>
          <div className="image-items">
            <img src={essen5} />
          </div>
          <div className="content-items">
            <h4>용역 계약서</h4>
            <span>
              용역 계약과 관련된 용역, 외주, <br /> 위탁, 아웃소싱 계약서 등
            </span>
          </div>
          <button className="btn_more">
            <img src={more} />
          </button>
        </section>
        <section>
          <div className="image-items">
            <img src={essen6} />
          </div>
          <div className="content-items">
            <h4>공급 계약서</h4>
            <span>
              회사의 물품과 관련된 모든 <br /> 공급, 주문, 발주, 납품 계약서 등
            </span>
          </div>
          <button className="btn_more">
            <img src={more} />
          </button>
        </section>
      </div>
      <span>그 외 사용가능한 계약서가 궁금하신가요?</span>
      <button className="btn_action_essential">
        더 살펴보기 <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Essential;
