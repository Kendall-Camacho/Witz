import "./register.css";
import TopBar from "../../components/topbar/TopBar";
export default function Register() {
  return (
    <>
      <TopBar />
      <div className="register">
        <span className="registerTitle">Registrar Usuario</span>
        <form className="registerForm">
          <label>Nombre de usuario</label>
          <input type="text"
            className="registerInput"
            placeholder="Nombre de usuario..." />
          <label>Correo electrónico</label>
          <input type="text"
            className="registerInput"
            placeholder="Ingrese su Email..." />
          <label>Contraseña</label>
          <input type="password"
            className="registerInput"
            placeholder="Ingrese su clave"
          />
          <button className="registerButton">Registrarse</button>
        </form>
        <button className="registerLoginButton">Login</button>
      </div>
    </>
  );
}
