import React from 'react';
import PropTypes from 'prop-types';

function Input({
  value,
  placeholder, type, handleChange, text, name,
}) {
  return (
    <label htmlFor="input">
      {text}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.string || PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  text: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Input;
