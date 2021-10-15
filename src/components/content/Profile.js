import React from "react";
import "./Profile.css";
import profile from "../../assest/Images/profile.jpg";
import pf1 from "../../assest/Images/pf1.png";
import pf2 from "../../assest/Images/pf2.png";
import pf3 from "../../assest/Images/pf3.png";
import pf4 from "../../assest/Images/pf4.png";
import pf5 from "../../assest/Images/pf5.png";
import pf6 from "../../assest/Images/pf6.png";

const Profile = (props) => {
  return (
    <div className="profile__wrap">
      <section className="profile__title">
        <h3>가드 시그니처를 선택하는 이유</h3>
        <span>
          많은 기업들이 가드 시그니처를 선택하는 이유, <br />
          아래 버튼을 눌러 상세한 정보를 알아보세요.
        </span>
      </section>
      <section className="profile__content">
        <div className="profile__left">
          <div>
            <img src={pf1} />
            <h4>쉽고 편리하게</h4>
            <span>
              번거로운 절차 없이 누구나 <br />
              빠르게 계약을 체결할 수 있습니다.
            </span>
          </div>
          <div>
            <img src={pf3} />
            <h4>안전한 보안</h4>
            <span>
              데이터는 암호화되어 전송되고 <br />
              안전한 곳에 저장됩니다.
            </span>
          </div>
          <div>
            <img src={pf5} />
            <h4>다양한 파일형식</h4>
            <span>
              데이터는 암호화되어 전송되고 <br />
              안전한 곳에 저장됩니다.
            </span>
          </div>
        </div>
        <div className="profile__avatar">
          <img src={profile} />
        </div>
        <div className="profile__right">
          <div>
            <img src={pf2} />
            <h4>간단한 본인인증</h4>
            <span>
              공인인증서와 ActiveX없이도 <br />
              본인인증을 할 수 있습니다.
            </span>
          </div>
          <div>
            <img src={pf4} />
            <h4>효율적인 작업</h4>
            <span>
              자주 사용하는 문서들을 저장하고 <br />
              불러와 작업할 수 있습니다.
            </span>
          </div>
          <div>
            <img src={pf6} />
            <h4>계약서 관리</h4>
            <span>
              관리가 필요한 문서를 한 눈에 보고 <br />
              체계적으로 관리할 수 있습니다.
            </span>
          </div>
        </div>
      </section>
      <button className="btn_action_profile">
      가이드 다운로드 <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Profile;
