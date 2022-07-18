import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseJwt } from "../../utils/parseJwt";
import axios from "axios";
import "./write.css";

export default function Write() {
  const [post, setPost] = useState({
    title: "",
    desc: "",
    photo: "",
    userName: parseJwt(localStorage.getItem("token")).userName,
    categories: ["IT"],
    createdAt: new Date().toISOString().slice(0, 10),
  });
  const navegation = useNavigate();

  const sendPost = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for(let key in post) {
      formData.append(key, post[key]);
    }
    const res = await axios.post("http://localhost:3001/api/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert(res.data.message);
    setPost({
      title: "",
      desc: "",
      photo: "",
      userName: parseJwt(localStorage.getItem("token")).userName,
      categories: ["IT"],
      createdAt: new Date().toISOString().slice(0, 10),
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
  };

  const dontPaste = (e) => {
    if (e.clipboardData.getData("Text")) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="write">
        <form className="writeForm" onSubmit={sendPost}>
          <div className="writeFormGroup">
            {!post.photo ? (
              <>
                <label className="labelInput" htmlFor="fileInput">
                  <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setPost({ ...post, photo: e.target.files[0] })
                  }
                  required
                  value={post.photo}
                />
              </>
            ) : (
              <>
                <div className="addSuccesFull"> 
                  File added succesfully
                </div>
              </>
            )}
            <input
              type="text"
              placeholder="Title"
              className="writeInputTitle"
              autoFocus={true}
              onChange={(e) => {
                characterLimit(e);
                setPost({ ...post, title: e.target.value });
              }}
              onPaste={(e) => dontPaste(e)}
              required
              value={post.title}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              cols={"80"}
              rows={"10"}
              placeholder="What have to tell us..."
              type="text"
              className="writeInputDesc"
              onChange={(e) => setPost({ ...post, desc: e.target.value })}
              required
              value={post.desc}
            ></textarea>
          </div>
          <button className="writeSubmit">Submit</button>
        </form>
      </div>
    </>
  );
}
