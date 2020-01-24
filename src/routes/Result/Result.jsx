import React from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { gameOver } from '../../store/actions';

import * as animationData from '../../animations/result.json';

import Content from '../../components/Content';
import Button from '../../components/Button/Button';

import './Result.scss';

const Result = ({ dispatch, question }) => {
  const history = useHistory();

  const animationOptions = {
    loop: false,
    animationData: animationData.default,
  };

  const onClick = () => {
    dispatch(gameOver());
    history.push('/');
  };

  return (
    <div className="result-page">
      <Content>
        <div className="result-icon">
          <Lottie options={animationOptions} />
        </div>
        <div className="status">You win!</div>
        <div className="description">
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

export default connect(mapStateToProps)(Result);
