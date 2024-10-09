import React from "react";
import "./Rating.scss"; // Assurez-vous de créer un fichier CSS pour le style

function Rating({ value, max }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(
      <span key={i} className={i <= value ? "star filled" : "star"}>
        ★
      </span>
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
