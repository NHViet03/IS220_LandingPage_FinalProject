import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Assign from "./pages/assign";
import Progress from "./pages/progress";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/assign" element={<Assign />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
