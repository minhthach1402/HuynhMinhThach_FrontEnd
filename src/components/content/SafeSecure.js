import React from "react";
import safe1 from "../../assest/Images/safe1.jpg";
import safe2 from "../../assest/Images/safe2.jpg";
import safe3 from "../../assest/Images/safe3.jpg";
import more from "../../assest/Images/more.png";
import "./SafeSecure.css";

const SafeSecure = (props) => {
  return (
    <div className="box-sefesecure">

      <section className="sefesecure__title">
        <h2>안전한 안심 제도</h2>
        <span>
          가드 시그니처는 [전자문서및전자거래기본법 제4조 제1항]과 <br />
          [전자서명법 제3조 제3항]에 따라 확실한 법적효력을 갖는 전자계약 서비스
          입니다.
        </span>
      </section>

      <section className="sefesecure__items">

        <div>
          <img src={safe1} />
          <h4>
            법적 효력 <br />
            자세히 알아보기
          </h4>
          <button>
            <span>MORE VIEW</span>
            <img src={more}/>
          </button>
        </div>

        <div>
          <img src={safe2} />
          <h4>
            서비스 보안 <br />
            자세히 알아보기
          </h4>
          <button>
            <span>MORE VIEW</span>
            <img src={more}/>
          </button>
        </div>

        <div>
          <img src={safe3} />
          <h4>
            위변조 검증 <br />
            자세히 알아보기
          </h4>
          <button>
            <span>MORE VIEW</span>
            <img src={more}/>
          </button>
        </div>

      </section>

    </div>
  );
};

export default SafeSecure;
