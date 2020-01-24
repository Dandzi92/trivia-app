import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionAnsweredCorrectly } from '../../store/actions';

import Loading from '../../components/Loading';
import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import QuestionText from '../../components/QuestionText';
import AnswerButton from '../../components/AnswerButton/AnswerButton';

import './Question.scss';

const Home = ({ dispatch, question }) => {
  const history = useHistory();
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
  const choices = ['a', 'b', 'c', 'd'];
  console.log(currentQuestion.correct_answer);

  const onClick = event => {
    const correctAnswer = currentQuestion.correct_answer.toString();
    const userAnswer = event.target.dataset.answer;
    if (userAnswer === correctAnswer) {
      dispatch(questionAnsweredCorrectly());
      history.push('/success');
    } else {
      history.push('/wrong');
    }
  };

  return (
    <div className="question">
      <QuestionStatusCard
        points={question.points}
        questionCount={question.questionCount}
        questionIndex={question.currentIndex}
      />
      <Content>
        <QuestionText>{currentQuestion.question}</QuestionText>
        {answers.map((answer, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <AnswerButton data-answer={answers} onClick={onClick} key={i} choice={choices[i]}>
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
