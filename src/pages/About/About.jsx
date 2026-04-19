import "./About.css";
import Container from "../../components/layout/Container/Container";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import Button from "../../components/ui/Button/Button";

export default function About() {
  const phone = "524421568407";

  const message = encodeURIComponent(
  "Hola, me gustaría agendar una cita en Marrakech Beauty Salon. ¿Podrían darme información de disponibilidad?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <main className="about">

      {/* HERO */}
      <section className="about__hero">
        <Container>
          <h1 className="about__title">Sobre Nosotros</h1>
        </Container>
      </section>

      {/* HISTORIA */}
      <section className="about__section">
        <Container>
          <SectionTitle
            subtitle="NUESTRA HISTORIA"
            title="Tradición y Elegancia"
          />

          <p className="about__text">
            En Marrakech Beauty Salon creemos que la belleza es un ritual.
            Nuestro espacio combina técnicas modernas con inspiración
            tradicional para ofrecer una experiencia única.
          </p>
        </Container>
      </section>

      {/* VALORES */}
      <section className="about__values">
        <Container>
          <div className="about__grid">

            <div className="about__card">
              <h3>Calidad</h3>
              <p>Productos y técnicas de alto nivel.</p>
            </div>

            <div className="about__card">
              <h3>Experiencia</h3>
              <p>Profesionales capacitados.</p>
            </div>

            <div className="about__card">
              <h3>Ambiente</h3>
              <p>Un espacio diseñado para relajarte.</p>
            </div>

          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <Container>
          <h2>Descubre tu mejor versión</h2>
          <Button size="large" href={whatsappUrl}>Reservar cita</Button>
        </Container>
      </section>

    </main>
  );
}