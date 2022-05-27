import { useState } from 'react';
import TopBar from "../../components/topbar/TopBar";
import "./write.css"

export default function Write() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
    date: new Date().toISOString().slice(0, 10),
    userName: "",
    category: "TI"
  });
  console.log(post);
  return (
    <>
      <TopBar />
      <div className="write">
        {
          (post.title && post.content && post.image && post.date && post.userName && post.category) ?
            (
              <>
                <div className="write-post">
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                  <img src={URL.createObjectURL(post.image)} alt="post-image" />
                  <p>{post.date}</p>
                  <p>{post.userName}</p>
                  <p>{post.category}</p>
                </div>
              </>
            ) : (
              <>
                <div className="write-form">
                  <img className="writeImg"
                    src="https://media.istockphoto.com/photos/loading-bar-almost-complete-with-idea-beeing-processed-on-a-light-on-picture-id1261755188?k=20&m=1261755188&s=612x612&w=0&h=BPPTE2tA8NbtrBf_Yh5unGRNOIJ1wczaHKuRZJU4phI=" alt="" 
                  />
                </div>
              </>
            )
        }
        <form className="writeForm">
          <div className="writeFormGroup">
            {
              (!post.image) ? (
                <>
                  <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: "none" }} 
                    onChange={(e) => setPost({ ...post, image: e.target.files[0] })} 
                  />
                </>
              ) : (
                <>
                  <div className='addSuccesFull'>
                    Archivo agregado
                  </div>
                  <img className="writeImg" src={URL.createObjectURL(post.image)} alt="" />
                </>
              )
            }
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} 
              onChange={(e) => setPost({ ...post, title: e.target.value })} 
            />
            <input type="text" placeholder="Author" className="writeInput"
              onChange={(e) => setPost({ ...post, userName: e.target.value })}
            />
          </div>

          <div className="writeFormGroup">
            <textarea placeholder="What have to tell us..." type="text" className="writeInput writeText"
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            ></textarea>
          </div>
          <button className="writeSubmit">Submit</button>
        </form>
      </div>
    </>
  );
}