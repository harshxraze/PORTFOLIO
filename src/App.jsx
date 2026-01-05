import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🌐 Page Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ⚙️ Footer */}
      <Footer />
    </div>
  );
}
