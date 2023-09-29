import React from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

const UnionMobile = (props) => {
  return (
    <svg className={props.className} width="270" height="213" viewBox="0 0 270 213" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path d="M270 40C270 34.4772 265.523 30 260 30H195.662C192.149 30 188.894 28.157 187.087 25.145L174.913 4.85504C173.106 1.84299 169.851 0 166.338 0H79.7727H10C4.47715 0 0 4.47715 0 10V173C0 178.523 4.47715 183 10 183H260C265.523 183 270 178.523 270 173V40Z" fill="currentColor"/>
      <path d="M270 40C270 34.4772 265.523 30 260 30H195.662C192.149 30 188.894 28.157 187.087 25.145L174.913 4.85504C173.106 1.84299 169.851 0 166.338 0H79.7727H10C4.47715 0 0 4.47715 0 10V173C0 178.523 4.47715 183 10 183H260C265.523 183 270 178.523 270 173V40Z" fill="url(#patternMobile0)"/>
      <path d="M270 40C270 34.4772 265.523 30 260 30H195.662C192.149 30 188.894 28.157 187.087 25.145L174.913 4.85504C173.106 1.84299 169.851 0 166.338 0H79.7727H10C4.47715 0 0 4.47715 0 10V173C0 178.523 4.47715 183 10 183H260C265.523 183 270 178.523 270 173V40Z" fill="url(#paint0_linear_528_95)"/>
      <path d="M270 40C270 34.4772 265.523 30 260 30H195.662C192.149 30 188.894 28.157 187.087 25.145L174.913 4.85504C173.106 1.84299 169.851 0 166.338 0H79.7727H10C4.47715 0 0 4.47715 0 10V173C0 178.523 4.47715 183 10 183H260C265.523 183 270 178.523 270 173V40Z" fill="url(#paint1_linear_528_95)"/>
      <path d="M208 198C208 205.606 202.339 211.89 195 212.868V213H231V212.868C223.661 211.89 218 205.606 218 198C218 190.394 223.661 184.11 231 183.132V183H195V183.132C202.339 184.11 208 190.394 208 198Z" fill="currentColor"/>
      <defs>
        <pattern id="patternMobile0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_528_95" transform="matrix(0.000295556 0 0 0.000436066 -0.005 -0.177741)"/>
        </pattern>
        <linearGradient id="paint0_linear_528_95" x1="116" y1="66" x2="116.127" y2="39.5126" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="currentColor"/>
          <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_528_95" x1="181.5" y1="57.5" x2="160" y2="49.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="currentColor"/>
          <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
        </linearGradient>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <image id="image0_528_95" width="2500" height="1667" xlinkHref={(theme === themes.light)?"/imgs/img8.webp":"/imgs/img9.webp"}/>
          )}
        </ThemeContext.Consumer>
      </defs>
    </svg>
  );
};

export default UnionMobile;