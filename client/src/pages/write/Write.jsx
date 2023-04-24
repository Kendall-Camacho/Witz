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
    for (let key in post) {
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

  // const characterLimit = (e) => {
  //   let value = e.target.value;
  //   const regex = /^.{0,30}$/;
  //   if (!regex.test(value)) {
  //     e.target.value = value.slice(0, -1);
  //     alert("Max 30 characters");
  //   } else {
  //     setPost({ ...post, [e.target.name]: value });
  //   }
  // };

  // sorry law jajajaj pero ahora me doy cuenta que la funcion de arriba se podia 
  // hacer mas facil con css, pero bueno, ya esta jajajaj

  // const dontPaste = (e) => {
  //   if (e.clipboardData.getData("Text")) {
  //     e.preventDefault();
  //   }
  // };

  // De nuevo sorry pero tenia que copiar por pereza de escribir entonces quite la funcion de arriba

  return (
      <div className="write">
        {post.photo && (
          <img className='writeImg' src={URL.createObjectURL(post.photo)} alt='' />
        )}
        <form className="writeForm" onSubmit={sendPost}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setPost({ ...post, photo: e.target.files[0] })}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              name="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              name="desc"
              value={post.desc}
              onChange={(e) => setPost({ ...post, [e.target.name]: e.target.value })}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
  );
} 