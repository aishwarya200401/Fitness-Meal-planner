import "./App.css";
import { SignUp } from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";

import Navbar from "./components/Home/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/Navbar' element={<Navbar/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
