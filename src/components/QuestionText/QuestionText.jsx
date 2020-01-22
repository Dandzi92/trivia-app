import React from 'react';
import PropTypes from 'prop-types';

import './QuestionText.scss';

const QuestionText = ({ children }) => {
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: children }} className="question-text" />;
};

QuestionText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionText;
