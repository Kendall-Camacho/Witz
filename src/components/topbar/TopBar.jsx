import "./topbar.css";
import { Link } from "react-router-dom";




export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i  className="topIcon fa-brands fa-github-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topcenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/home" className="Link">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="Link">Write</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/login" className="Link">Login</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/register" className="Link">Register</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/11039600/pexels-photo-11039600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/1114318/pexels-photo-1114318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
