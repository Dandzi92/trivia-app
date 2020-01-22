import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Question</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
}
