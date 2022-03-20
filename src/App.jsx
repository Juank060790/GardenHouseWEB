import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route component={Notfound} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
