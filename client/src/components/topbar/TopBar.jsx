import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { parseJwt } from "../../utils/parseJwt";
// import an image
import logo from "../../assets/witz.png";
import logowhite from "../../assets/witzwhite.png";

import "./topbar.css";


export default function TopBar() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }


  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const user = parseJwt(token);
        setUser(user);
      } else {
        setUser(null);
      }
    }
    getUser();
  }, [navigate, user]);

  const themeToggle = () => {
    // set theme light by default
    const theme = document.querySelector("body").classList;
    const topbar = document.querySelector(".top").classList;
    if (theme.contains("light")) {
      theme.remove("light");
      theme.add("dark");
      topbar.remove("light");
      topbar.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      theme.remove("dark");
      theme.add("light");
      topbar.remove("dark");
      topbar.add("light");
      localStorage.setItem("theme", "light");
    }
  }

  const theme = localStorage.getItem("theme");
  document.querySelector("body").classList.add(theme);
  
  return (
    <div className={theme === "dark" ? "top dark" : "top light"}>
      <div className='topLeft'>
        <Link to='/'>
          {theme === "dark" ? (
            <img src={logowhite} alt='logo' className='topIcon' /> ) : (<img src={logo} alt='logo' className='topIcon' />)}
        </Link>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="Link">Home</Link>
          </li>
          <li className="topListItem">
            {/* link to github profiles */}
            <a href="https://github.com/Kendall-Camacho/Witz" className="Link">Github</a>
          </li>
          <li className="topListItem">
            <Link to="/write" className="Link">Write</Link>
          </li>
        { user
          ? (
            <li className="topListItem" onClick={logout}>
              <Link to="/" className="Link">Logout</Link>
            </li>
          ) : null
        }
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
            className="topImg"
            src="https://picsum.photos/200/300"
            alt="profile"
            />
            ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="Link">Login</Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="Link">Register</Link>
              </li>
            </ul>
          )
        }
        <i className="topIconMoon fa-solid fa-moon" onClick={themeToggle}></i>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
