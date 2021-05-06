import React, { Component } from "react";

const InputField = ({ name, label, value, errors, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        id={name}
        type="text"
        className="form-control"
        name={name}
        onChange={onChange}
      />
      {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
    </div>
  );
};

export default InputField;
