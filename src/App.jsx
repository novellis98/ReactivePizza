import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Ordina from "./pages/Ordina";
import MenuFree from "./pages/MenuFree";
import Offerte from "./pages/Offerte";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import { PostProvider } from "./contexts/Context";
import Cart from "./components/Cart";

function AppContent() {
  return (
    <>
      <Cart />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ordina" element={<Ordina />} />
        <Route path="/menu-free" element={<MenuFree />} />
        <Route path="/offerte" element={<Offerte />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Header />
        <AppContent />
        <Footer />
      </BrowserRouter>
    </PostProvider>
  );
}
