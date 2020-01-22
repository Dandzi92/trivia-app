import React from 'react';
import { StageSpinner } from 'react-spinners-kit';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <StageSpinner />
    </div>
  );
};

export default Loading;
