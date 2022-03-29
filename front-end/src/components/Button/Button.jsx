import React from 'react';
import PropTypes from 'prop-types';

function Button({ handleClick, text }) {
  return (
    <button
      className="button"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  handleClick: () => {},
};

export default Button;
