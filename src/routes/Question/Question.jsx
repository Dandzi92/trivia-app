import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';

import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import QuestionText from '../../components/QuestionText';
import AnswerButton from '../../components/AnswerButton/AnswerButton';

import './Question.scss';

const Home = ({ question }) => {
  if (question.fetching) {
    return (
      <div className="question-loading">
        <Loading />
      </div>
    );
  }

  const { currentQuestion } = question;
  const answers = [].concat(currentQuestion.incorrect_answers, currentQuestion.correct_answer);
  // eslint-disable-next-line no-unused-vars
  answers.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="question">
      <QuestionStatusCard />
      <Content>
        <QuestionText>{currentQuestion.question}</QuestionText>
        {answers.map((answer, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <AnswerButton key={i} choice="a">
              {answer}
            </AnswerButton>
          );
        })}
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
