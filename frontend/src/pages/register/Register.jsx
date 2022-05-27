import "./register.css";
import Login from "../login/Login";
import { Link } from "react-router-dom";
import TopBar from "../../components/topbar/TopBar";
import Button from "../../components/Button/Button";

export default function Register() {
  return (
    <>
      <TopBar />
      <div className="register">
        <span className="registerTitle">Register User</span>
        <form className="registerForm">
          <label>Type your username</label>
          <input type="text"
            className="registerInput"
            placeholder="Username..." />
          <label>Email</label>
          <input type="text"
            className="registerInput"
            placeholder="Enter your email Please..." />
          <label>Password...</label>
          <input type="password"
            className="registerInput"
            placeholder="Type your password"
          />
          <button className="loginRegisterButton">
            <Link to="/login">Login</Link>
          </button>
        </form>

        <Button classCSS="loginButton">
          <Link to="/">Register</Link>
        </Button>
      </div>
    </>
  );
}
