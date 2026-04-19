import "./Header.css";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const phone = "524421568407";

  const message = encodeURIComponent(
    "Hola, me gustaría agendar una cita en Marrakech Beauty Salon. ¿Podrían darme información de disponibilidad?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <header className="header">
      <Container>
        <div className="header__content">

          <div className="header__logo">
            Marrakech
          </div>

          <Navbar />

          <div className="header__actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
            >
              Reservar cita
            </a>
          </div>

        </div>
      </Container>
    </header>
  );
}