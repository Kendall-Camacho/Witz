import App from "./App";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";

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
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// categorias aplicaciones software