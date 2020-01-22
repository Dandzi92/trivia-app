import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import './Home.scss';

export default function Home() {
  const history = useHistory();
  const generateQuiz = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',
    );
    const data = await response.json();
    history.push('/question');
    return data;
  };
  return (
    <div className="container">
      <div className="logo" />
      <div className="slogan">A trivia game</div>
      <Button
        onClick={() => {
          generateQuiz();
        }}
      >
        GET STARTED
      </Button>
    </div>
  );
}
