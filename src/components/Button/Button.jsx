import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick} className="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
};
