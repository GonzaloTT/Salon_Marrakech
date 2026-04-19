import "./Services.css";
import Container from "../../components/layout/Container/Container";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";

export default function Services() {
  return (
    <main className="services">

      {/* HERO */}
      <section className="services__hero">
        <Container>
          <h1 className="services__title">Servicios</h1>
        </Container>
      </section>

      {/* LISTA DE SERVICIOS */}
      <section className="services__section">
        <Container>

          <SectionTitle
            subtitle="NUESTROS SERVICIOS"
            title="Tratamientos Exclusivos"
            center
          />

          <div className="services__grid">

            <div className="services__card">
              <h3>Cabello</h3>
              <p>Cortes, coloración y tratamientos capilares.</p>
            </div>

            <div className="services__card">
              <h3>Uñas</h3>
              <p>Manicure, pedicure y diseño personalizado.</p>
            </div>

            <div className="services__card">
              <h3>Faciales</h3>
              <p>Limpieza profunda y cuidado de la piel.</p>
            </div>

            <div className="services__card">
              <h3>Corporales</h3>
              <p>Masajes y tratamientos relajantes.</p>
            </div>

            <div className="services__card">
              <h3>Rituales</h3>
              <p>Experiencias completas de bienestar.</p>
            </div>

            <div className="services__card">
              <h3>Especiales</h3>
              <p>Paquetes personalizados para eventos.</p>
            </div>

          </div>

        </Container>
      </section>

    </main>
  );
}