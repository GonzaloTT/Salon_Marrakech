import "./Gallery.css";
import Container from "../../components/layout/Container/Container";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";

export default function Gallery() {
  return (
    <main className="gallery">

      {/* HERO */}
      <section className="gallery__hero">
        <Container>
          <h1 className="gallery__title">Galería</h1>
        </Container>
      </section>

      {/* GRID DE IMÁGENES */}
      <section className="gallery__section">
        <Container>

          <SectionTitle
            subtitle="NUESTRO TRABAJO"
            title="Resultados Reales"
            center
          />

          <div className="gallery__grid">

            <div className="gallery__item"></div>
            <div className="gallery__item"></div>
            <div className="gallery__item"></div>
            <div className="gallery__item"></div>
            <div className="gallery__item"></div>
            <div className="gallery__item"></div>

          </div>

        </Container>
      </section>

    </main>
  );
}