import App from "./App";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/Single"
import Register from "./pages/register/Register"

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
                <Route path="settings" element={<Settings />} />
                <Route path="single" element={<Single />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// categorias aplicaciones software