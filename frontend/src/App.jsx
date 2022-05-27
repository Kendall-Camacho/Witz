import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
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
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="write" element={<Write />} />
            <Route path="login" element={user ? <Home />:<Login />} />
            <Route path="single" element={<Single />} />
            <Route path="register" element={user ? <Home/> :<Register />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;