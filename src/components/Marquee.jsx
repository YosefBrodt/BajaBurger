import React from 'react';
import './Marquee.css';

const Marquee = ({ 
  items = [], 
  color = 'yellow', 
  speed = '22s' 
}) => {
  // Determine styles based on color
  let containerClass = `marquee-container bg-${color}`;
  let textClass = color === 'yellow' ? 'text-orange' : 'text-white';
  let dotClass = color === 'yellow' ? 'dot-white' : 'dot-yellow';

  return (
    <div className={containerClass}>
      <div 
        className="marquee-track" 
        style={{ animationDuration: speed }}
      >
        {/* We duplicate the items a few times to ensure seamless infinite scroll */}
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="marquee-group">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={`marquee-item ${textClass}`}>{item}</span>
                <span className={`marquee-dot ${dotClass}`}></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
