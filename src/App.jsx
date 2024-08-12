import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Offerte from "./pages/Offerte";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import { PostProvider } from "./contexts/Context";

export default function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/offerte" element={<Offerte />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PostProvider>
  );
}
