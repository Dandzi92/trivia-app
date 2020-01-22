import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Question.scss';

const Home = ({ question }) => {
  console.log(question);
  if (question.fetching) {
    return <div className="container">Loading</div>;
  }

  return (
    <div className="container">
      <div className="logo" />
      <div className="slogan">A trivia game</div>
      <Link to="/">Home</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps)(Home);
