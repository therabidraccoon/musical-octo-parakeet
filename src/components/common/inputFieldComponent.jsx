import React from "react";

const InputFieldComponent = ({
  name,
  label,
  type,
  value,
  disabled,
  onChange,
}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id={name}>
        {label}
      </span>
      <input
        name={name}
        type={type}
        className="form-control"
        disabled={disabled}
        value={value}
        onInput={onChange}
      ></input>
    </div>
  );
};

export default InputFieldComponent;
