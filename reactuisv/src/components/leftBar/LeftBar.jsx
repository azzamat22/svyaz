import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Друзья</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Сообщества</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Магазин</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Клипы</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Воспоминания</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Быстрый доступ</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>События</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Игры</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Галлерея</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Видео</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Сообщения</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Другое</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Пожертвования</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Туториалы</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Курсы</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
