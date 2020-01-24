import React, { Component } from 'react';

import { connect } from 'react-redux';
import { questionAnsweredCorrectly } from '../../store/actions';

import Loading from '../../components/Loading';
import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import QuestionText from '../../components/QuestionText';
import AnswerButton from '../../components/AnswerButton/AnswerButton';

import './Question.scss';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: null,
      remainingTime: 15,
    };
  }

  componentDidUpdate() {
    const { answers, remainingTime } = this.state;
    const { history, question } = this.props;
    const { error } = question;
    if (error) {
      console.log(error);
      history.push('/');
    }
    if (answers && remainingTime === 15) {
      this.timer = setInterval(this.interval, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  interval = () => {
    const { remainingTime } = this.state;
    const { history } = this.props;
    this.setState({ remainingTime: remainingTime - 1 });
    if (remainingTime === 0) {
      history.push('/timesup');
    }
  };

  onClick = answer => {
    const { dispatch, question, history } = this.props;
    const { remainingTime } = this.state;
    const { currentQuestion } = question;
    const correctAnswer = currentQuestion.correct_answer;
    const userAnswer = answer;
    if (userAnswer === correctAnswer) {
      const earnedPoint = Math.round(100 / (15 / remainingTime));
      dispatch(questionAnsweredCorrectly(earnedPoint));
      history.push('/success');
    } else {
      history.push('/wrong');
    }
  };

  render() {
    const { question } = this.props;
    const { answers, remainingTime } = this.state;
    const { currentQuestion } = question;
    const choices = ['a', 'b', 'c', 'd'];

    if (question.fetching) {
      return (
        <div className="question-loading">
          <Loading />
        </div>
      );
    }

    if (!answers) {
      const answersArray = [].concat(
        currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      );
      // eslint-disable-next-line no-unused-vars
      answersArray.sort((a, b) => 0.5 - Math.random());
      this.setState({ answers: answersArray });
      console.log(currentQuestion.correct_answer);
    }

    return (
      <div className="question">
        <QuestionStatusCard
          points={question.points}
          questionCount={question.questionCount}
          questionIndex={question.currentIndex}
          remainingTime={remainingTime}
        />
        <Content>
          <QuestionText>{currentQuestion.question}</QuestionText>
          {answers &&
            answers.map((answer, i) => {
              return (
                <AnswerButton
                  data-answer={answer}
                  onClick={this.onClick}
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  choice={choices[i]}
                >
                  {answer}
                </AnswerButton>
              );
            })}
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps)(Question);
