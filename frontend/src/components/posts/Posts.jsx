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
          <span className="postDesc">{post.desc}</span>
          <span className="postAuthor">{post.username}</span>
          <img className="postImg" src="https://images.pexels.com/photos/11740343/pexels-photo-11740343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <span></span>
          <p>
            {
              (post.categories) ? post.categories.map(category => (
                <span >{category.name}</span>
              )) : "No categories"
            }
          </p>
          <Link to={`/single/${post._id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}


export default Posts;