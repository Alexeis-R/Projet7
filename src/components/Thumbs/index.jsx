import React from "react";
import "./Thumbs.scss";

function Thumbs({ cover, title }) {
  return (
    <div className="thumbnail">
      <img className="thumbnail_img" src={cover} alt={title} />
      <h2 className="thumbnail_title">{title}</h2>
    </div>
  );
}

export default Thumbs;
