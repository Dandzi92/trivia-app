import React from 'react';
import PropTypes from 'prop-types';

import './QuestionStatusCard.scss';

const QuestionStatusCard = ({ questionCount, questionIndex, points, remainingTime }) => {
  return (
    <div className="question-status-card">
      <div className="wrapper">
        <div>Question</div>
        <div>{`${questionIndex + 1} / ${questionCount}`}</div>
      </div>
      {Number.isInteger(points) && (
        <div className="wrapper">
          <div>Points</div>
          <div>{points}</div>
        </div>
      )}
      {Number.isInteger(remainingTime) && (
        <div className="wrapper">
          <div>Remaining Time</div>
          <div>{remainingTime}</div>
        </div>
      )}
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
  questionCount: 10,
  questionIndex: 0,
  points: null,
  remainingTime: null,
};

export default QuestionStatusCard;
