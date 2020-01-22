import React from 'react';
import PropTypes from 'prop-types';

import './AnswerButton.scss';

const AnswerButton = ({ children, choice }) => {
  return (
    <button type="button" className="answer-button">
      <div className="choice">{choice}</div>
      <div className="text">{children}</div>
    </button>
  );
};

AnswerButton.propTypes = {
  choice: PropTypes.string,
};

AnswerButton.defaultProps = {
  choice: 'a',
};

export default AnswerButton;
