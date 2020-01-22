import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';

import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';

import './Question.scss';

const Home = ({ question }) => {
  if (question.fetching) {
    return (
      <div className="question-loading">
        <Loading />
      </div>
    );
  }

  return (
    <div className="question">
      <QuestionStatusCard />
      <Content>1</Content>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps)(Home);
