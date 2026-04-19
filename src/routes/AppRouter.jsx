import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}