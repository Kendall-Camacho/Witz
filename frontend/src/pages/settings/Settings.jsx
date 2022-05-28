import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

function Settings() {
  return (
    <>
      <TopBar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Modificar perfil</span>
            <span className="settingsUpdateTitle">Dar de baja</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsProfilePicture">
              <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="profilePicture" />
              <label htmlFor="fileInput">
                <i className="settingsProfilePictureIcon fas fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Nombre" />
            <label>Email</label>
            <input type="email" placeholder="correo@dominio.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Salvar</button>
          </form>
        </div>
        <SideBar />
      </div>
    </>
  )
}


export default Settings