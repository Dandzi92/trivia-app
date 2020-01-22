import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateQuestions } from '../../store/actions';
import Button from '../../components/Button';

import './Home.scss';

const Home = ({ dispatch }) => {
  const history = useHistory();

  const buttonOnClick = async () => {
    dispatch(generateQuestions('easy'));
    history.push('/question');
  };

  return (
    <div className="container">
      <div className="logo" />
      <div className="slogan">A trivia game</div>
      <Button
        onClick={() => {
          buttonOnClick();
        }}
      >
        GET STARTED
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps)(Home);
