import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { gameOver } from '../../store/actions';

import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import Button from '../../components/Button/Button';

import './Wrong.scss';

const Wrong = ({ dispatch, question }) => {
  const history = useHistory();
  const onClick = () => {
    dispatch(gameOver());
    history.push('/');
  };

  return (
    <div className="wrong-page">
      <QuestionStatusCard
        points={question.points}
        questionCount={question.questionCount}
        questionIndex={question.currentIndex}
      />
      <Content>
        <div className="wrong-icon" />
        <div className="status">Wrong</div>
        <div className="description">
          <span>You failed.</span>
          <span>Total: {question.points} points</span>
        </div>
        <Button onClick={onClick} variant="big">
          Main Menu
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

export default connect(mapStateToProps)(Wrong);
