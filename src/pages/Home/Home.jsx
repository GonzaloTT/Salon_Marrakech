import "./Home.css";
import Container from "../../components/layout/Container/Container";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import Button from "../../components/ui/Button/Button";

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="home__hero">
        <Container>
          <div className="home__hero-content">

            <span className="home__subtitle">
              MARRAKECH BEAUTY SALON
            </span>

            <h1 className="home__title">
              Donde la belleza se convierte en ritual
            </h1>

            <p className="home__description">
              Vive una experiencia única de cuidado personal con nuestros
              tratamientos exclusivos diseñados para resaltar tu esencia.
            </p>

            <div className="home__actions">
              <Button size="large">Reservar cita</Button>
              <Button variant="outline" size="large">
                Ver servicios
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section className="home__services">
        <Container>

          <SectionTitle
            subtitle="NUESTROS SERVICIOS"
            title="Tratamientos Exclusivos"
            center
          />

          <div className="home__services-grid">
            <div className="home__service-card">Cabello</div>
            <div className="home__service-card">Uñas</div>
            <div className="home__service-card">Faciales</div>
          </div>

        </Container>
      </section>

    </main>
  );
}