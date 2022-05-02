import "./write.css"
import TopBar from "../../components/topbar/TopBar";
export default function Write() {
  return (
    <>
      <TopBar />
      <div className="write">
        <img className="writeImg"
          src="https://media.istockphoto.com/photos/loading-bar-almost-complete-with-idea-beeing-processed-on-a-light-on-picture-id1261755188?k=20&m=1261755188&s=612x612&w=0&h=BPPTE2tA8NbtrBf_Yh5unGRNOIJ1wczaHKuRZJU4phI=" alt="" />

          <form className="writeForm">
              <div className="writeFormGroup">
                  <label htmlFor="fileInput">
                  <i className="writeIcon fa-solid fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}} />
                  <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
              </div>
              <div className="writeFormGroup">
                  <textarea placeholder="What have to tell us..." type="text" className="writeInput writeText"
                  ></textarea>
              </div>
              <button className="writeSubmit">Submit</button>
          </form>

        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Que tienes por contar..." type="text" className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publicar </button>
        </form>

      </div>
    </>
  );
}
