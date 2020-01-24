import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from '../../animations/loading.json';

import './Loading.scss';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loading">
      <Lottie width={200} height={200} options={defaultOptions} />
    </div>
  );
};

export default Loading;
