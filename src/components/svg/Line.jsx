import React from 'react';
import useObserver from '../../hooks/useObserver';

const Line = () => {
  const [objRef3, isVisible3] = useObserver({threshold: 1.0});

  return (
    <div ref={objRef3} className={(isVisible3)?'line observing':'line'}>
      <svg width="362" height="41" preserveAspectRatio="xMinYMid meet" viewBox="0 0 362 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 39.0001C10 33.0001 224 -30.9999 360 25.0001" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export default Line;