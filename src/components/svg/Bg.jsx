import React from 'react';

const Bg = (props) => {
  return (
    <svg className={props.className} width="1780" height="800" viewBox="0 0 1780 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter1)">
        <ellipse className='ellipse-1' cx="600" cy="1200" rx="407" ry="339.5"/>
      </g>
      <g filter="url(#filter2)">
        <ellipse className='ellipse-2' cx="2080" cy="900" rx="420.5" ry="339.5"/>
      </g>
      <g filter="url(#filter3)">
        <ellipse className='ellipse-3' cx="-100" cy="-250" rx="407" ry="339.5"/>
      </g>
      <g filter="url(#filter4)">
        <ellipse className='ellipse-4' cx="350" cy="1150" rx="350" ry="237.7"/>
      </g>
      <defs>
        <filter id="filter1" x="-21" y="300" width="1800" height="1279" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_14_277"/>
        </filter>
        <filter id="filter2" x="1316" y="-188" width="1641" height="1479" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_14_277"/>
        </filter>
        <filter id="filter3" x="-1000" y="-1000" width="2000" height="1500" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_14_277"/>
        </filter>
        <filter id="filter4" x="-321" y="500" width="2300" height="1273" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_14_277"/>
        </filter>
      </defs>
    </svg>
  );
};

export default Bg;