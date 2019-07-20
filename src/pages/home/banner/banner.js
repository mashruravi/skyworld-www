import React from 'react';

import './banner.scss';

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <div className="text-container">
          <div className="quote">
            <span>
              &quot;Uganda is a fairy-tale. You climb up a railway instead of a
              beanstalk, and at the end there is a wonderful new world&quot;
            </span>
          </div>
          <div className="author">
            <span> - Sir Winston Churchill </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
