import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/Button";
import "./login.css";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("https://witz-back.up.railway.app/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      navigate("/");
    } else {
      alert("Please check your credentials");
    }
  }

  return (
    <>
      <div className="Login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={loginUser}>
          <label>Email</label>
          <input 
            type="email"
            className="loginInput"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton"> Login send </button>
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


export default Login;