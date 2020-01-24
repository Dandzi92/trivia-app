import React from 'react';
import Lottie from 'react-lottie';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionChanged } from '../../store/actions';

import * as animationData from '../../animations/correct.json';

import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import Button from '../../components/Button/Button';

import './Success.scss';

const Success = ({ dispatch, question }) => {
  const history = useHistory();

  const animationOptions = {
    loop: false,
    animationData: animationData.default,
  };

  const onClick = () => {
    const { currentIndex, questionCount } = question;
    if (currentIndex + 1 === questionCount) {
      history.push('/result');
    } else {
      dispatch(questionChanged());
      history.push('/question');
    }
  };

  return (
    <div className="success-page">
      <QuestionStatusCard
        questionCount={question.questionCount}
        questionIndex={question.currentIndex}
      />
      <Content>
        <div className="check-icon">
          <Lottie options={animationOptions} />
        </div>
        <div className="status">Correct</div>
        <div className="description">
          <span>You have earned {question.lastEarnedPoint} points</span>
          <span>Total: {question.points} points</span>
        </div>
        <Button onClick={onClick} variant="big">
          Next Question
        </Button>
      </Content>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps)(Success);
