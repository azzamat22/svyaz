import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Классная запись",
      name: "Восниковская Эмилия",
      userId: 1,
      profilePicture:
        "https://img.freepik.com/free-photo/winsome-beautiful-young-woman-posing-on-brown-wall-close-up-shot-of-wonderful-brunette-girl_197531-13994.jpg?w=1380&t=st=1684256960~exp=1684257560~hmac=82504bbbadd02ba1f6653de736cd53e64f3c8574a79867964e4cdc64a9c51d28",
    },
    {
      id: 2,
      desc: "Крутая запись",
      name: "Римова Мия",
      userId: 2,
      profilePicture:
        "https://img.freepik.com/free-photo/beautiful-in-profile-of-half-naked-gentle-woman-posing-on-camera-with-closed-eyes-isolated-over-black_171337-842.jpg?w=1380&t=st=1684256975~exp=1684257575~hmac=e6de3196f63172b621f7927ff3d9eabd01a890543e10b03a0eb63c809cbc5b20",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Оставьте комментарий" />
        <button>Отправить</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 час назад</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
