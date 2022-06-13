import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./write.css";

/* A function that is exporting a component. */
export default function Write() {
  const [post, setPost] = useState({ 
    title: "",
    desc: "",
    photo: "",
    userName: parseJwt(localStorage.getItem("token")).userName,
    categories: ["IT"],
    /* Getting the current date and time and converting it to a string. */
    createdAt: new Date().toISOString().slice(0, 10)
  });
  const navegation = useNavigate();

  function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  const sendPost = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/api/posts", post);
    alert(res.data.message);
    setPost({
      title: "",
      desc: "",
      photo: "",
      userName: parseJwt(localStorage.getItem("token")).userName,
      categories: ["IT"],
      createdAt: new Date().toISOString().slice(0, 10)
    });
    navegation("/");
  };

  const characterLimit = (e) => {
    let value = e.target.value;
    const regex = /^.{0,30}$/;
    if (!regex.test(value)) {
      e.target.value = value.slice(0, -1);
    } else {
      setPost({ ...post, [e.target.name]: value });
    }
  }

  const dontPaste = (e) => {
    if (e.clipboardData.getData("Text")) {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className="write">
        {
          // estile bien esto XD
          (post.title && post.desc && post.photo && post.createdAt && post.userName && post.categories) ?
            (
              <>
                <div className="writePost">
                  <img className='writePostImg' src={URL.createObjectURL(post.photo)} alt="post-image" />
                </div>
              </>
            ) : (
              <>
                <div className="writeFormDiv">
                </div>
              </>
            )
        }
        <form className="writeForm" onSubmit={sendPost} >
          <div className="writeFormGroup">
            {
              (!post.photo) ? (
                <>
                  <label className='labelInput' htmlFor="fileInput">
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
                </>
              )
            }
            <input type="text" placeholder="Title" className="writeInputTitle" autoFocus={true}
              onChange={(e) => {
                characterLimit(e)
                setPost({ ...post, title: e.target.value })
              }}
              onPaste={(e) => dontPaste(e)}
              required
              value={post.title}
            />
          </div>
          <div className="writeFormGroup">
            <textarea cols={'80'} rows={'10'}  placeholder="What have to tell us..." type="text" className="writeInputDesc"
             /* A function that is being called when the input changes. */
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