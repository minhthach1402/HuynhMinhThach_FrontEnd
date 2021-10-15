import React from "react";
import "./Footer.css";
import ft1 from "../../assest/Images/ft1.png";
import ft2 from "../../assest/Images/ft2.png";
import ft3 from "../../assest/Images/ft3.png";

const Footer = (props) => {
  return (
      <div className="footer__wrap">
        <section className="footer__content">
          <ul>
            <li>이용약관 </li>
            <li>개인정보처리방침</li>
            <li>고객센터</li>
          </ul>
          <span>
            (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
            356-00-00000 <br />
            이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000 <br />
            서울특별시 강남구 도산대로 8길 17 2층 <br /> <br />
            Copyright© GUARDSIGNATURE All rights reserved.
          </span>
        </section>

        <ul className="footer__contact">
          <li>
            <img src={ft1} />
          </li>
          <li>
            <img src={ft2} />
          </li>
          <li>
            <img src={ft3} />
          </li>
        </ul>
      </div>
  );
};

export default Footer;
