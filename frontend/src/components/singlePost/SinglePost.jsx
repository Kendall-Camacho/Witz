import { Link } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/11391081/pexels-photo-11391081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">English proyect, Kendall & lawrent.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"><Link to="/">link</Link></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Kendall & Lawrent</b></span>
          <span className="singlePostDate">2 hours ago</span>
        </div>
        <p className="singlePostDesc">
          {/* Insert to post */}
          In this app everyone can upload info. 
          {/* Finish section */}
        </p>
      </div>
    </div>
  )
}
