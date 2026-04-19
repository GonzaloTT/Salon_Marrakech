import "./Footer.css";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>

        <div className="footer__content">

          {/* Marca */}
          <div className="footer__brand">
            <h3>Marrakech</h3>
            <p>
              Un santuario de belleza donde la tradición se encuentra
              con la estética contemporánea.
            </p>
          </div>

          {/* Navegación */}
          <div className="footer__links">
            <h4>Navegación</h4>
            <ul>
              <li>Ubicación</li>
              <li>Horarios</li>
              <li>Aviso Legal</li>
              <li>Privacidad</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer__contact">
            <h4>Contacto</h4>
            <p>Querétaro, México</p>
            <p>+52 442 253 4454</p>
            <p>marrakech.salon.qro@gmail.com</p>
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h4>Newsletter</h4>
            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

        </div>

        <div className="footer__bottom">
          <p>© 2026 Marrakech Beauty Salon</p>
        </div>

      </Container>
    </footer>
  );
}