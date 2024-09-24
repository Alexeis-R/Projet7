import React from 'react';
import './Banner.scss';

function Banner({ bannerImg, text }) {
  return (
    <div className="container">
      <div className="banner">
      {text && <div className="banner_overlay"></div>}
      <img
        className="banner_img"
        src={bannerImg}
        alt="Banner"
      />
      {text && (
        <p className="banner_text">{text}</p>
      )}
    </div>
    </div>
  );
}

export default Banner;
