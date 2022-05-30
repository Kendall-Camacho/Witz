import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Register from "../register/Register";
import "./login.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
  }
  
  return (
    <>
      <div className="Login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
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
      <button className="loginButton">
        <Link to="/home">Register</Link>
      </button>
    </>
  );
}
