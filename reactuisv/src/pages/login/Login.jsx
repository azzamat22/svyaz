import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>svyazI</h1>
          <p>
          svyazI - это платформа, которая позволяет школьникам и студентам общаться друг с другом, делиться информацией и находить новых друзей. 
          Она может быть полезна для учебы, общения и развлечений. 
          </p>
          <span>Нет учетной записи?</span>
          <Link to="/register">
            <button>Зарегистрироваться</button>
          </Link>
        </div>
        <div className="right">
          <h1>Войти</h1>
          <form>
            <input type="text" placeholder="Имя пользователя" />
            <input type="password" placeholder="Пароль" />
            <button onClick={handleLogin}>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
