import { useState } from 'react';
import "./register.css";

export default function Register() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName,
        email,
        password
      })
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div className="register">
        <span className="registerTitle">Register User</span>
        <form className="registerForm" onSubmit={registerUser}>
          <label>Type your User Name</label>
          <input type="text"
            className="registerInput"
            placeholder="Username..." 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label>Email</label>
          <input type="text"
            className="registerInput"
            placeholder="Enter your email Please..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password...</label>
          <input type="password"
            className="registerInput"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="loginButton">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
