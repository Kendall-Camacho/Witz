import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("http://localhost:3001/api/posts");
      if (result.data && result.data.length) {
        setPosts(result.data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    }
    fetchPosts();
  }, [posts]);

  return (
    <div className="Posts">
      {
        (loading) ? (
          // edite esto para que se vea bonito mientras carga XD
          <div className="Posts-loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            {posts.map(post => (
              <div className="PostInfo" key={post._id}>
                <span className="PostTitle">{post.title}</span>
                {post.photo ?
                  <img style={{ width: "385px" }} src={post.photo} className="PostImg" alt="post-image" /> :
                  <img style={{ width: "385px" }} src={"https://via.placeholder.com/150"} className="PostImg" alt="post-image" />
                }
                <span style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "300px",
                  display: "inline-block"
                }}
                  className="PostsDesc">{post.desc}</span>
                <span className="PostAuthor">Writed by: {post.userName}</span>
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
          </>
        )
      }
    </div>
  )
}


export default Posts;