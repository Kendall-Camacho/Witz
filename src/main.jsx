import App from "./App";
<<<<<<< HEAD
import ReactDOM from "react-dom/client";


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
=======
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single"; 
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="single" element={<Single />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
>>>>>>> b9fdb1ff821dada8e84f1c671dac26f276ab4716
