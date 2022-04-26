import App from "./App";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

render(
    <BrowserRouter> 
        <Routes>
            <Route>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route path="write" element={<Write />} />
                <Route path="single" element={<Single />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

