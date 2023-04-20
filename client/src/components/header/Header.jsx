import "./header.css";
import img from "../../assets/80.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Lawrent & Kendall & Pedro</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={ img } alt="" />
    </div>
  )
}
