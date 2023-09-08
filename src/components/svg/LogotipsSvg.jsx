import React from 'react'

const LogotipsSvg = () => {
  return (
    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image href="imgs/logotips/nodejs1x1.webp" height="600" width="600" >
            <animate
            attributeName="opacity"
            values="0; 1; 1; 0; 0"
            keyTimes="0; 0.08; 0.25; 0.33; 1"
            dur="3s"
            repeatCount="indefinite" />
        </image>
        <image href="imgs/logotips/react1x1.webp" height="600" width="600" >
            <animate
            attributeName="opacity"
            values="0; 0; 1; 1; 0; 0;"
            keyTimes="0; 0.33; 0.4; 0.58; 0.66; 1"
            dur="3s"
            repeatCount="indefinite" />
        </image>
        <image href="imgs/logotips/vue1x1.webp" height="600" width="600" opacity="0">
            <animate
            attributeName="opacity"
            values="0; 0; 1; 1; 0;"
            keyTimes="0; 0.67; 0.75; 0.92; 1"
            dur="3s"
            repeatCount="indefinite" />
        </image>
    </svg>

  )
}

export default LogotipsSvg