import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Home from "./views/Home";
import CreateCharacter from "./views/CreateCharacter";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/character" element={<CreateCharacter />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
