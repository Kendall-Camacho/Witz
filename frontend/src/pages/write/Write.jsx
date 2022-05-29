import { useState } from 'react';
import axios from 'axios';
import "./write.css";

export default function Write() {
  const [post, setPost] = useState({
    title: "",
    desc: "",
    photo: "",
    userName: "",
    categories: ["IT"],
    createdAt: new Date().toISOString().slice(0, 10)
  });
  
  const sendPost = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: post.title,
        desc: post.desc,
        photo: new FormData(e.target).get("photo"),
        userName: post.userName,
        categories: post.categories,
        createdAt: post.createdAt
      })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="write">
        {
          (post.title && post.desc && post.photo && post.createdAt && post.userName && post.categories) ?
            (
              <>
                <div className="writePost">
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                  <img src={URL.createObjectURL(post.photo)} alt="post-image" />
                  <p>{post.createdAt}</p>
                  <p>{post.userName}</p>
                  <p>{post.categories}</p>
                </div>
              </>
            ) : (
              <>
                <div className="writeForm">
                </div>
              </>
            )
        }
        <form className="writeForm" 
          onSubmit={sendPost}
        >
          <div className="writeFormGroup">
            {
              (!post.photo) ? (
                <>
                  <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: "none" }} 
                    onChange={(e) => setPost({ ...post, photo: e.target.files[0] })} 
                    // required
                    value={post.photo}
                  />
                </>
              ) : (
                <>
                  <div className='addSuccesFull'>
                  </div>
                  <img className="writeImg" src={URL.createObjectURL(post.photo)} alt="" />
                </>
              )
            }
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} 
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
              value={post.title}
            />
            <input type="text" placeholder="Author" className="writeInput"
              onChange={(e) => setPost({ ...post, userName: e.target.value })}
              required
              value={post.userName}
            />
          </div>

          <div className="writeFormGroup">
            <textarea placeholder="What have to tell us..." type="text" className="writeInput writeText"
              onChange={(e) => setPost({ ...post, desc: e.target.value })}
              required
              value={post.desc}
            >
            </textarea>
          </div>
          <button className="writeSubmit">Submit</button>
        </form>
      </div>
    </>
  );
}