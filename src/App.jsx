import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCrewmate from "./pages/CreateCrewmate";
import NavBar from "./components/NavBar";
import CrewmateGallery from "./pages/CrewmateGallery";
import EditCrewmate from "./pages/EditCrewmate";
import CrewmateDetail from "./pages/CrewmateDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/gallery" element={<CrewmateGallery />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
