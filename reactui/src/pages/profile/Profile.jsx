import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://img.freepik.com/free-photo/business-teamwork-join-hands-together-business-teamwork-concept_1150-1804.jpg?w=1380&t=st=1684257966~exp=1684258566~hmac=e0150b297481373c21660ccfb07640e9e0d92f443fe514ee3168e5ac288166e2"
          alt=""
          className="cover"
        />
        <img
          src="https://img.freepik.com/free-photo/tanned-curly-brunette-woman-in-loose-denim-pants-and-floral-blouse-holds-retro-camera-and-poses-with-young-girlfriend-outside-pretty-blonde-girl-in-blue-top-and-jeans-smiles-outdoors_197531-27753.jpg?w=1380&t=st=1684258062~exp=1684258662~hmac=5f522b2e1ea965cde6021741602e0c45972d7d91c801f9deffaff5970ff4d2bf"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Орлова Вика</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Россия</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>svyazI</span>
              </div>
            </div>
            <button>Подписаться</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
