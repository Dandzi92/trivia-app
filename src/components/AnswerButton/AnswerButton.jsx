import React from 'react';
import PropTypes from 'prop-types';

import './AnswerButton.scss';

const AnswerButton = ({ children, choice, onClick }) => {
  return (
    <button data-answer={children} onClick={onClick} type="button" className="answer-button">
      <div className="choice">{choice}</div>
      <div className="text" dangerouslySetInnerHTML={{ __html: children }} />
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
