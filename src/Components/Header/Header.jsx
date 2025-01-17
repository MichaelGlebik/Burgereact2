import Heading from "../Heading/Heading";
import Buttons from "../Buttons/Buttons";
import logo from "../../assets/logo.png";
import burger from "../../assets/burgerPic.png";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.wrapperHeader}>
      <div className={style.wrapperLogo}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
      <div className={style.mainInfoHeader}>
        <img src={burger} alt="burger" className={style.logo} />
        <div className={style.headerText}>
          <Heading content="Только самые" color="white" />
          <Heading content="Cочные бургеры!" color="rgb(255, 92, 0)" />
          <p className={style.deliveryText}>Бесплатная доставка от 599 Р</p>
          <div className={style.wrapperBtn}>
            <Buttons content="Добавить" color="#F2F2F3" colorText="black" />
          </div>
        </div>
      </div>
    </div>
  );
}
