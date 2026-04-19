import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  href,
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn--${variant} btn--${size}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`btn btn--${variant} btn--${size}`}>
      {children}
    </button>
  );
}