

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Placed_student from "./components/pages/Placed_student";
import Preparation from "./components/pages/Preparation";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/companies" element={<Home/>} />
            <Route path="/placed_student" element={<Placed_student />} />
            <Route path="/preparation" element={<Preparation />} />
        </Routes>
      </BrowserRouter>
      </div>
  
  );
}

export default App;
