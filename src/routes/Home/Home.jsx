import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

export default function Home() {
  return (
    <div className="container">
      <div className="logo">a</div>
      <div className="slogan">A trivia game</div>
      <Link to="/question">Go to question</Link>
    </div>
  );
}
