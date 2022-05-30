import { useParams, useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from 'axios'
import "./singlePost.css"

function SinglePost() {

  const { id } = useParams();
  const [post, setPost] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:3001/api/posts/${id}`)
      setPost(res.data)
    }
    fetchData()
  }, [])
  
  if(post.createdAt) post.createdAt = post.createdAt.slice(0,10);
  
  const deletePost = async () => {
    await axios.delete(`http://localhost:3001/api/posts/${id}`);
    navigate("/")
  }

  const editPost = () => navigate(`/edit/${id}`); // work in progress

  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""
          className="singlePostImg" />
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i 
                className="singlePostIcon fa-solid fa-pen-to-square"
                onClick={editPost}
              >
              </i>
              <i 
                className="singlePostIcon fa-solid fa-trash-alt"
                onClick={deletePost}
              >
              </i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>{post.userName}</b></span>
            <span className="singlePostDate">Posted on: <b>{post.createdAt}</b></span>
          </div>
            <p className="singlePostDesc">{post.desc}</p>
        </div>
    </div>      
  )
}


export default SinglePost