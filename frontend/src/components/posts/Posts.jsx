import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("http://localhost:3001/api/posts");
      setPosts(result.data);
    }
    fetchPosts();
  }, [posts]);

  return (
    <div className="posts">
      {posts.map(post => (
        <div className="postInfo" key={post._id}>
          <span className="postTitle">{post.title}</span>
          <img style={
            {
              width: "385px",
            }
            } className="postImg" src={post.photo ? post.photo : "https://via.placeholder.com/150"} alt="" />
          <span style={
            {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "300px",
              display: "inline-block"
            }
          } className="postDesc">{post.desc}</span>
          <span className="postAuthor">Writed by: {post.userName}</span>
          <p>
            {
              (post.categories) ? post.categories.map(category => (
                <span >{category}</span>
              )) : "No categories"
            }
          </p>
          <Link className="linkToSingle" to={`/single/${post._id}`}>
            Read more <i className="fas fa-angle-double-right"></i>
          </Link>
        </div>
      ))}
    </div>
  )
}


export default Posts;