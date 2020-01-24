import React from 'react';
import PropTypes from 'prop-types';

import './AnswerButton.scss';

const AnswerButton = ({ children, choice, onClick, disabled }) => {
  const onClicked = () => {
    onClick(children);
  };

  return (
    <button onClick={onClicked} type="button" className="answer-button" disabled={disabled}>
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
