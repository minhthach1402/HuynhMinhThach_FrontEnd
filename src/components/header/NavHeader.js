import React, { useState } from "react";
import classes from "./NavHeader.module.css";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "./MenuMobile";

const NavHeader = (props) => {
  const isIphoneX = useMediaQuery({
    query: "(max-width: 375px)",
  });

  const [isMenu, setIsMenu] = useState(false);

  const ShowMenuHandler = (event) => {
    event.preventDefault();
    setIsMenu(true);
    if (isMenu) {
      setIsMenu(false);
    }
  };

  const HideMenuHandler = (event) => {
    event.preventDefault();
    setIsMenu(false);
  };
  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <span>
            GUARD <br />
            SIGNATURE
          </span>
        </div>{" "}
        <br />
        <br />
        {/* Thanh Menu điện thoại */}
        {/* {isMenu && <span onClick={HideMenuHandler} className={classes.close}>X</span>} */}
        {/* {isMenu && (
          <div onClick={HideMenuHandler} className={classes.overlay}></div>
        )} */}
        {isMenu && (
          <MenuMobile hideMenu={HideMenuHandler}/>
        )}
        {isIphoneX && (
          <button
            className={classes["btn_show-menu"]}
            onClick={ShowMenuHandler}
          >
            <i
              className={"fa fa-bars " + classes["icon__menu"]}
              aria-hidden="true"
            ></i>
          </button>
        )}
        {/* Thanh Menu Desktop */}
        {!isIphoneX && (
          <ul className={classes.menu}>
            <li>
              <span>서비스 소개</span>
            </li>
            <li>
              <span>법적효력·보안</span>
            </li>
            <li>
              <span>활용 분야</span>
            </li>
            <li>
              <span>이용 혜택</span>
            </li>
            <li>
              <span>요금 안내</span>
            </li>
            <li>
              <span>고객센터</span>
            </li>
          </ul>
        )}
        {!isIphoneX && (
          <ul className={classes.profile}>
            <li>
              <span>로그인</span>
            </li>
            <li>
              <span>회원가입</span>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavHeader;
