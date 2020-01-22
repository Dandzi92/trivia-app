import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import './Home.scss';

export default function Home() {
  return (
    <div className="container">
      <div className="logo" />
      <div className="slogan">A trivia game</div>
      <Link to="/question">
        <Button>GET STARTED</Button>
      </Link>
    </div>
  );
}
