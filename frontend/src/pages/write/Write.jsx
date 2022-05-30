import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navegation = useNavigate();

  const sendPost = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/api/posts", post);
    alert(res.data.message);
    setPost({
      title: "",
      desc: "",
      photo: "",
      userName: "",
      categories: ["IT"],
      createdAt: new Date().toISOString().slice(0, 10)
    });
    navegation("/");
  };

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
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
              value={post.title}
            />
            <input type="text" placeholder="Author" className="writeInputAuthor"
              onChange={(e) => setPost({ ...post, userName: e.target.value })}
              required
              value={post.userName}
            />
          </div>

          <div className="writeFormGroup">
            <textarea cols={'80'} rows={'10'}  placeholder="What have to tell us..." type="text" className="writeInputDesc"
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