import "./Input.css";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
}) {
  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input__field"
      />
    </div>
  );
}