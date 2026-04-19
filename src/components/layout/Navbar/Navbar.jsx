import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/servicios" className="navbar__link">
        Tratamientos
      </NavLink>

      <NavLink to="/nosotros" className="navbar__link">
        Estilistas
      </NavLink>

      <NavLink to="/rituales" className="navbar__link">
        Rituales
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