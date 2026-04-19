import "./Header.css";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">

          <div className="header__logo">
            Marrakech
          </div>

          <Navbar />

          <div className="header__actions">
            <button className="header__cta">
              Reservar cita
            </button>
          </div>

        </div>
      </Container>
    </header>
  );
}