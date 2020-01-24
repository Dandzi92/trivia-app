import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({ children, variant, onClick }) {
  const className = `button button-${variant}`;
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
  onClick: null,
};
