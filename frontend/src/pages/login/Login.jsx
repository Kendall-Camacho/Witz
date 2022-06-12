import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/Button";
import "./login.css";

const Login = () => {
  
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, email, password);
  }
  
  return (
    <>
      <div className="Login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>User Name</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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


export default Login;