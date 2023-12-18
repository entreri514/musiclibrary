import "./TextField.css";

const TextField = ({ label, value, onChange }) => {
  return (
    <div className="mb-2">
      <label className="form-label">
        {label}
        <input
          className="form-control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default TextField;
