import "./Card.css";

export default function Card({ image, title, description }) {
  return (
    <div className="card">
      {image && (
        <div className="card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}