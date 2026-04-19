import "./Contact.css";
import Container from "../../components/layout/Container/Container";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

export default function Contact() {
  return (
    <main className="contact">

      {/* HERO */}
      <section className="contact__hero">
        <Container>
          <h1 className="contact__title">Contacto</h1>
        </Container>
      </section>

      {/* FORMULARIO */}
      <section className="contact__section">
        <Container>

          <SectionTitle
            subtitle="AGENDA TU CITA"
            title="Contáctanos"
          />

          <form className="contact__form">

            <Input placeholder="Nombre" />
            <Input type="email" placeholder="Correo electrónico" />
            <Input placeholder="Teléfono" />

            <textarea
              className="contact__textarea"
              placeholder="Mensaje"
            />

            <Button size="large">
              Enviar mensaje
            </Button>

          </form>

        </Container>
      </section>

      {/* INFO */}
      <section className="contact__info">
        <Container>

          <div className="contact__grid">

            <div>
              <h3>Ubicación</h3>
              <p>Avenida Mirador de Tequisquiapan 48, Fraccionamiento el Mirador, Querétaro, Qro., México</p>
            </div>

            <div>
              <h3>Teléfono</h3>
              <p>+52 442 253 4454</p>
            </div>

            <div>
              <h3>Horario</h3>
              <p>Martes a Sábado: 9:00 - 18:00</p>
            </div>

          </div>

        </Container>
      </section>

    </main>
  );
}