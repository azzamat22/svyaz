import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Орлова Вика",
      userId: 1,
      profilePic:
        "https://img.freepik.com/free-photo/tanned-curly-brunette-woman-in-loose-denim-pants-and-floral-blouse-holds-retro-camera-and-poses-with-young-girlfriend-outside-pretty-blonde-girl-in-blue-top-and-jeans-smiles-outdoors_197531-27753.jpg?w=1380&t=st=1684258062~exp=1684258662~hmac=5f522b2e1ea965cde6021741602e0c45972d7d91c801f9deffaff5970ff4d2bf",
      desc: "Люблю своих друзей! Надеюсь нас ждут еще много приключений в будущем!",
      img: "https://img.freepik.com/free-photo/happy-and-excited-friends-reunited_23-2149165091.jpg?w=1380&t=st=1684256036~exp=1684256636~hmac=39f40099439f51dd19c079354282e5f390b00bda52c712574f2a0d1a90e0f1f2",
    },
    {
      id: 2,
      name: "Викторовна Джейн",
      userId: 2,
      profilePic:
        "https://img.freepik.com/free-photo/portrait-of-a-woman_23-2147626503.jpg?w=740&t=st=1684255974~exp=1684256574~hmac=37102b9aed15f8343f8a5fe0903385f88770668f428c4508736478ac5e5d32dc",
      desc: "Народ , срочно нужен человек ,разбирающийся в дизайне, кто знает такого лс отпишите пожалуйста, заранее спасибо",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
