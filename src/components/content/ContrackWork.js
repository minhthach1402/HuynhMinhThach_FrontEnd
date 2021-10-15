import React from "react";
import logo1 from "../../assest/Images/logo1.jpg";
import logo2 from "../../assest/Images/logo2.jpg";
import logo3 from "../../assest/Images/logo3.jpg";
import logo4 from "../../assest/Images/logo4.jpg";
import "./ContrackWork.css";

const ContrackWork = (props) => {
  return (
    <>
    <div className="box__contrack-work">
      <div className="box-title__contrack-work">
        <h3>5분 만에 끝내는 계약 업무</h3>
        <span>
          계약서 파일을 업로드하여 서명을 요청해 보세요. <br />
          상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수
          있습니다. <br />
          언제 어디서든 5분만에 계약을 체결해 보세요. <br />
        </span>
      </div>
      <div className="box-content__contrack-work">
        <section>
          <img src={logo1}/>
          <h4>업로드하기</h4>
          <span>
            필요한 계약서 파일을 <br />
            업로드합니다.
          </span>
        </section>
        <section>
          <img src={logo2}/>
          <h4>서명 요청하기</h4>
          <span>
            업로드한 계약서 파일에 <br />
            서명 요청을 하세요.
          </span>
        </section>
        <section>
          <img src={logo3}/>
          <h4>서명 입력하기</h4>
          <span>
            상대방이 간단한 절차를 통해 <br />
            서명할 수 있습니다.
          </span>
        </section>
        <section>
          <img src={logo4}/>
          <h4>계약 완료</h4>
          <span>
            언제 어디서든 <br /> 5분 만에 계약 완료!
          </span>
        </section>
      </div>
    </div>
    </>
  );
};

export default ContrackWork;
