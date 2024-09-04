import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Ordina from "./pages/Ordina";
import MenuFree from "./pages/MenuFree";
import Offerte from "./pages/Offerte";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import { OffersProvider } from "./contexts/OffersContext";
import Cart from "./components/Cart";
import { MenuFreeProvider } from "./contexts/MenuFreeContext";
import { CartProvider } from "./contexts/CartContext";
import ScrollToTop from "./hooks/ScrollToTop";

function AppContent() {
  return (
    <>
      <Cart />
      <ScrollToTop />
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
    <CartProvider>
      <MenuFreeProvider>
        <OffersProvider>
          <BrowserRouter>
            <Header />
            <AppContent />
            <Footer />
          </BrowserRouter>
        </OffersProvider>
      </MenuFreeProvider>
    </CartProvider>
  );
}
