

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Companies from "./components/pages/Companies";
import Placed_student from "./components/pages/Placed_student";
import Preparation from "./components/pages/Preparation";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/companies" element={<Companies/>} />
            <Route path="/placed_student" element={<Placed_student />} />
            <Route path="/preparation" element={<Preparation />} />
        </Routes>
      </BrowserRouter>
      </div>
  
  );
}

export default App;
