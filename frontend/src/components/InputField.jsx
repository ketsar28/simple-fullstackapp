import React from "react";

export function InputField({ label, id, type, placeholder, value, onChange }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-semibold">
        {label} :
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={id}
        aria-describedby={`${id}Help`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div id={`${id}Help`} className="form-text">
        We'll never share your {label.toLowerCase()} with anyone else.
      </div>
    </div>
  );
}
