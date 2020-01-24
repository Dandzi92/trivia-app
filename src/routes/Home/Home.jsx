import React, { useState } from 'react';
import Lottie from 'react-lottie';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateQuestions } from '../../store/actions';

import * as animationData from '../../animations/logo.json';

import Button from '../../components/Button';

import './Home.scss';

const Home = ({ dispatch }) => {
  const history = useHistory();
  const [category, setCategory] = useState('any');
  const [difficultly, setDifficultly] = useState('any');

  const animationOptions = {
    loop: false,
    animationData: animationData.default,
  };

  const buttonOnClick = () => {
    /**
     * Bazı kategorilerin zorluk seviyelerinde bug bulunuyor.
     * Category: Art
     * Difficultly: Hard
     * https://opentdb.com/api.php?amount=10&category=25&difficulty=hard
     */
    dispatch(generateQuestions(category, difficultly));
    history.push('/question');
  };

  const categoryOnChanged = event => {
    setCategory(event.target.value);
  };
  const difficultlyOnChanged = event => {
    setDifficultly(event.target.value);
  };

  return (
    <div className="home">
      <div className="logo">
        <Lottie options={animationOptions} />
      </div>
      <div className="slogan">A trivia game</div>
      <div className="selections">
        <select onChange={categoryOnChanged}>
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        <select onChange={difficultlyOnChanged}>
          <option value="any">Any Difficult</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
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
