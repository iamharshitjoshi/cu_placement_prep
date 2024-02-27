

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import PlacedStudent from "./components/pages/PlacedStudent";
import Preparation from "./components/pages/Preparation";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/companies" element={<Home/>} />
            <Route path="/PlacedStudent" element={<PlacedStudent />} />
            <Route path="/preparation" element={<Preparation />} />
        </Routes>
      </BrowserRouter>
      </div>
  
  );
}

export default App;
