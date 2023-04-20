import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./singlePost.css";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:3001/api/posts/${id}`);
      setPost(res.data);
    }
    fetchData();
  }, []);

  if (post.createdAt) post.createdAt = post.createdAt.slice(0, 10);
  const deletePost = async () => {
    await axios.delete(`http://localhost:3001/api/posts/${id}`);
    navigate("/");
  };

  // get the comments
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:3001/api/posts/comment/${id}`);
      setComments(res.data.comments);
    }
    fetchData();
    console.log(comments);
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.photo?.url} alt="Post-Image" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i
              className="singlePostIcon fa-solid fa-trash-alt"
              onClick={deletePost}
            ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.userName}</b>
          </span>
          <span className="singlePostDate">
            Posted on: <b>{post.createdAt}</b>
          </span>
        </div>
        <pre className="singlePostDesc">{post.desc}</pre>
      </div>
    </div>
  );
}

export default SinglePost;
