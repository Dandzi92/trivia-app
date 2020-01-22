import React from 'react';
import PropTypes from 'prop-types';

import './QuestionText.scss';

const QuestionText = ({ children }) => {
  return <div className="question-text">{children}</div>;
};

QuestionText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionText;
