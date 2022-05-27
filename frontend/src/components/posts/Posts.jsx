import { useState, useEffect } from "react";
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
        <div className="post" key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
          <p>{post.username}</p>
          <p>
            {
              (post.categories) ? post.categories.map(category => (
                <span >{category.name}</span>
              )) : "No categories"
            }
          </p>
        </div>
      ))}
    </div>
  )
}


export default Posts;