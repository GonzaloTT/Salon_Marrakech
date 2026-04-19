import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phone = "524421568407";

  const message = encodeURIComponent(
    "Hola, me gustaría agendar una cita en Marrakech Beauty Salon. ¿Podrían darme información de disponibilidad?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}