import "./login.css";
import TopBar from "../../components/topbar/TopBar";
import Register from "../register/Register";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Login() {
  return (
    <>
      <TopBar />
      <div className="Login">
          <span className="loginTitle">Login</span>
          <form className="loginForm">
              <label>Email</label>
              <input type="text" className="loginInput" placeholder="Please, enter your email" />
              <label>Password</label>
              <input type="password" className="loginInput" placeholder="Type your password" />
              <Button classCSS="loginButton">
                  <Link to="/">Login</Link>
              </Button>
          </form>

          <Button classCSS="Register">
            <Link to="/register">Register</Link>
          </Button>
      </div>
    </>
  );
}
