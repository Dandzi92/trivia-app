import React from 'react';
import PropTypes from 'prop-types';

import './QuestionStatusCard.scss';

const QuestionStatusCard = ({ questionCount, questionIndex, points, remainingTime }) => {
  return (
    <div className="question-status-card">
      <div className="wrapper">
        <div>Question</div>
        <div>{`${questionIndex} / ${questionCount}`}</div>
      </div>
      <div className="wrapper">
        <div>Points</div>
        <div>{points}</div>
      </div>
      <div className="wrapper">
        <div>Remaining Time</div>
        <div>{remainingTime}</div>
      </div>
    </div>
  );
};

QuestionStatusCard.propTypes = {
  questionCount: PropTypes.number,
  questionIndex: PropTypes.number,
  points: PropTypes.number,
  remainingTime: PropTypes.number,
};

QuestionStatusCard.defaultProps = {
  questionCount: 0,
  questionIndex: 0,
  points: 0,
  remainingTime: 0,
};

export default QuestionStatusCard;
