import Modal from "../UI/Modal";
import classes from './MenuMobile.module.css';

const MenuMobile = (props) => {
  return (
    <Modal hideMenu={props.hideMenu}>
      <ul className={classes["sub_menu"]}>
        <div>
          <div className={classes.logo}>
            <span>
              GUARD <br />
              SIGNATURE
            </span>
          </div>

          <span onClick={props.hideMenu} className={classes.close}>
            X
          </span>
        </div>
        <hr />
        <hr />
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
        <hr />
        <hr />
        <li>
          <span>로그인</span>
        </li>
        <li>
          <span>회원가입</span>
        </li>
      </ul>
    </Modal>
  );
};

export default MenuMobile;
