import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/servicios" className="navbar__link">
        Servicios
      </NavLink>

      <NavLink to="/nosotros" className="navbar__link">
        Sobre Nosotros
      </NavLink>

      <NavLink to="/galeria" className="navbar__link">
        Galería
      </NavLink>

      <NavLink to="/contacto" className="navbar__link">
        Contacto
      </NavLink>

    </nav>
  );
}