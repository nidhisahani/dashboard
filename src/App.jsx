import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import Signup from "./pages/Signup";

function App() {
  const { token } = useContext(StoreContext);
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/')
  }

  return (
    <>
      {token ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard handleLogout={handleLogout}/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </>
  );
}

export default App;
