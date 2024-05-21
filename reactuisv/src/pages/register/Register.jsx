import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>svyazI</h1>
          <p>
          svyazI - это платформа, которая позволяет школьникам и студентам общаться друг с другом, делиться информацией и находить новых друзей. 
          Она может быть полезна для учебы, общения и развлечений. 
          </p>
          <span>Уже имеется аккаунт?</span>
          <Link to="/login">
          <button>Войти</button>
          </Link>
        </div>
        <div className="right">
          <h1>Регистрация</h1>
          <form>
            <input type="text" placeholder="Имя пользователя" />
            <input type="email" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <input type="text" placeholder="Имя" />
            <button>Регистрация</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
