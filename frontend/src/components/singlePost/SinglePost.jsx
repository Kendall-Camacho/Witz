import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from 'axios'
import "./singlePost.css"

function SinglePost() {

  const { id } = useParams();
  const [post, setPost] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:3001/api/posts/${id}`)
      setPost(res.data)
    }
    fetchData()
  }, [])
  
  return (
    <div className="singlePost">
      <img className="singlePostImg" src="https://imgs.search.brave.com/-BIMccSrVTz2KoojJDo-pL_z0_AAQXlyV_AZXfhi65s/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/SjViS1UtUnFUYWtP/STV0aWNIOG1nSGFF/SyZwaWQ9QXBp" alt="" />
      <h1 className="singlePostTitle">{post.title}</h1>
      <div className="singlePostIcon">
        <div className="singlePostEdit">
        <i class="fa-solid fa-trash-can"></i>
        <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
      <p className="singlePostInfo">{post.userName}</p>
      <p className="singlePostDesc">{post.desc}</p>
    </div>
  )
}


export default SinglePost