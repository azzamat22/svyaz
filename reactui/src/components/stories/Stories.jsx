import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Глухов Лев",
      img: "https://img.freepik.com/free-photo/beautiful-vivid-sunset-sky-and-dark-forest-landscape_181624-29887.jpg?w=1380&t=st=1684254582~exp=1684255182~hmac=a1fc3df2aac2b496f6b275ebac02a0a84fde84c13383d12d7bfd5e79224cec10",
    },
    {
      id: 2,
      name: "Борисова Таисия",
      img: "https://img.freepik.com/free-photo/interior-portrait-of-woman-in-vaporwave-style_23-2148950802.jpg?w=740&t=st=1684254605~exp=1684255205~hmac=ca2c7bb994617aafd9b5b3e833fbf0d3ee361787fa5e7c63d0ed6b35c6ee23e2",
    },
    {
      id: 3,
      name: "Власов Арсен",
      img: "https://img.freepik.com/free-photo/wet-monstera-deliciosa-plant-leaves-in-a-garden_53876-146901.jpg?w=1380&t=st=1684254616~exp=1684255216~hmac=aa7f1e91d9483ef0317202562d5b3f9b97881506999cdb5d6c60ea905853c2ed",
    },
    {
      id: 4,
      name: "Митрофанов Максим",
      img: "https://img.freepik.com/free-photo/silhouette-of-a-male-on-the-beach-during-sunset-with-amazing-clouds-in-the-pink-sky_181624-15824.jpg?w=740&t=st=1684254653~exp=1684255253~hmac=5f052607c2557402363005be60b7e66fe0dee0a5ed2cfe9cff03850f90b68425",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories