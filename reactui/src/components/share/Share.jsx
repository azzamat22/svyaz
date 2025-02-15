import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`Что нового,  ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Добавить изображение</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Добавить геолокацию</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Отметить друзей</span>
            </div>
          </div>
          <div className="right">
            <button>Поделиться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
