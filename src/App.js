

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import PlacedStudent from "./components/pages/PlacedStudent";
import Preparation from "./components/pages/Preparation";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
        <Routes>
<<<<<<<<< Temporary merge branch 1
            <Route path="/home" element={<Home/>} />
            <Route path="/placed_student" element={<Placed_student />} />
=========
            <Route path="/companies" element={<Home/>} />
            <Route path="/PlacedStudent" element={<PlacedStudent />} />
>>>>>>>>> Temporary merge branch 2
            <Route path="/preparation" element={<Preparation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      </div>
  
  );
}

export default App;
