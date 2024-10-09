import React from "react";
import "./Tags.scss";

function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
