import React from 'react';
import useIsMobile from '../../hooks/isMobile';

const Bg = (props) => {
  const {mobile} = useIsMobile('991px')

  let blur = (mobile) ? "50" : "120";

  return (
    <svg className={props.className} preserveAspectRatio="xMaxYMid slice" width={(mobile)?"550":"1780"} height={(mobile)?"440":"800"} viewBox={(mobile)?"0 0 350 440":"0 0 1780 800"} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue 1 */}
      <g filter="url(#filter1)">
        <ellipse className='ellipse-1' fill="#0077FF" cx="10%" cy="200%" rx="24%" ry="42%"/>
      </g>
      {/* Green 1 */}
      <g filter="url(#filter2)">
        <ellipse className='ellipse-2' fill="#CFFF83" cx="115%" cy="113%" rx="24%" ry="42%"/>
      </g>
      {/* Blue 2 */}
      <g filter="url(#filter3)">
        <ellipse className='ellipse-3' fill="#0077FF" cx="-6%" cy="-20%" rx="24%" ry="42%"/>
      </g>
      {/* Green 2 */}
      <g filter="url(#filter4)">
        <ellipse className='ellipse-4' fill="#CFFF83" cx="20%" cy="140%" rx="20%" ry="35%"/>
      </g>
      <defs>
        {/* Blue 1 */}
        <filter id="filter1"  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation={blur} result="effect1_foregroundBlur_14_277"/>
        </filter>
        {//     function updateMenu() {}
        <filter id="filter3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation={blur} result="effect1_foregroundBlur_14_277"/>
        </filter>
        {/* Green 1 */}
        <filter id="filter2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation={blur} result="effect1_foregroundBlur_14_277"/>
        </filter>
        {/* Green 2 */}
        <filter id="filter4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation={blur} result="effect1_foregroundBlur_14_277"/>
        </filter>
      </defs>
    </svg>
  );
};

export default Bg;