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
      console.log(res.data)
    }
    fetchData()
  }, [])
  
  return (
    <div className="singlePost">
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
      <p>{post.username}</p>
    </div>
  )
}


export default SinglePost