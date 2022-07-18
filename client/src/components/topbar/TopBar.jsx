import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { parseJwt } from "../../utils/parseJwt";
import "./topbar.css";


export default function TopBar() {

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
  
  return (
    <div className='top'>
      <div className='topLeft'>
        <Link to='/'><h1>WITZ</h1></Link>
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
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
              className="topImg"
              src="https://imgs.search.brave.com/8qeduie8cjVIqFjSVgVhwYL21bvuHVe89xGoSQrO4_s/rs:fit:542:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/by1CQ0MxWktGcExM/NjVEOTNlSGNnSGFH/ZSZwaWQ9QXBp"
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
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
