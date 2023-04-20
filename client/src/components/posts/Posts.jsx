import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    };
    fetchPosts();
  }, [posts]);

  const slideDate = (date) => {
    const dateArray = date.split("-");
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  };

  return (
    <div className="Posts">
      {loading ? (
        <>
          <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>
        </>
      ) : (
        <>
          {posts.map((post) => (
            <div className="PostInfo" key={post._id}>
              <span className="PostTitle">{post.title}</span>
              {post.photo ? (
                <img
                  style={{ width: "100%" }}
                  src={post.photo.url}
                  className="PostImg"
                  alt="post-image"
                />
              ) : (
                <img
                  style={{ width: "385px" }}
                  src="https://via.placeholder.com/150"
                  className="PostImg"
                  alt="post-image"
                />
              )}
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "300px",
                  display: "inline-block",
                }}
                className="PostsDesc"
              >
                {post.desc}
              </span>
              <span className="PostAuthor">Writed by: {post.userName}</span>
              <span className="PostDate">
                {slideDate(post.createdAt.slice(0, 10))}
              </span>
              <p>
                {post.categories
                  ? post.categories.map((category) => <span>{category}</span>)
                  : "No categories"}
              </p>
              <Link className="linkToSingle" to={`/single/${post._id}`}>
                Read more <i className="fas fa-angle-double-right"></i>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Posts;
