import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/register" element={<Register />} />
          <Route path="/single" element={<Single />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;