import React from 'react';

const WaveDivider = ({ 
  toColor = 'teal'  // 'teal' or 'yellow'
}) => {
  const fillClass = `wave-to-${toColor}`;

  return (
    <svg 
      className={`wave-divider ${fillClass}`} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path 
        fillOpacity="1" 
        d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,218.7C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default WaveDivider;
