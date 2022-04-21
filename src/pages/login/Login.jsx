import "./login.css";
import TopBar from "../../components/topbar/TopBar";
export default function Login() {
  return (
    <>
      <TopBar />
      <div className="Login">
          <span className="loginTitle">Login</span>
          <form className="loginForm">
              <label>Correo electrónico</label>
              <input type="text" className="loginInput" placeholder="Ingrese su Email" />
              <label>Contraseña</label>
              <input type="password" className="loginInput" placeholder="Ingrese su clave" />
          <button className="loginButton">Iniciar Sesión</button>
          </form>
          <button className="loginRegisterButton">Registro</button>
      </div>
    </>
  );
}
