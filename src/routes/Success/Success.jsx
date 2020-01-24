import React from 'react';
import { connect } from 'react-redux';

import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import Button from '../../components/Button/Button';

import './Success.scss';

const Success = ({ question }) => {
  return (
    <div className="success-page">
      <QuestionStatusCard />
      <Content>
        <div className="check-icon" />
        <div className="status">Correct</div>
        <div className="description">
          <span>You have earned 100 points</span>
          <span>Total: 300 points</span>
        </div>
        <Button variant="big">Next Question</Button>
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
