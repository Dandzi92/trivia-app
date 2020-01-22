import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';

import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import QuestionText from '../../components/QuestionText';

import './Question.scss';
import AnswerButton from '../../components/AnswerButton/AnswerButton';

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
      <Content>
        <QuestionText>
          What was Bruce Campbell's iconic one-liner after getting a chainsaw hand in Evil Dead 2?
        </QuestionText>
        <AnswerButton choice="a">Test</AnswerButton>
        <AnswerButton choice="b">Test</AnswerButton>
        <AnswerButton choice="c">Test</AnswerButton>
        <AnswerButton choice="d">Test</AnswerButton>
      </Content>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps)(Home);
