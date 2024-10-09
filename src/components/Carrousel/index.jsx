import React, { useState, useEffect } from "react";
import chevronLeft from "../../../public/chevron_left.svg";
import chevronRight from "../../../public/chevron_right.svg";
import "./Carrousel.scss";

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Pictures received:", pictures);
  }, [pictures]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <button
          onClick={prevSlide}
          className="carrousel_button carrousel_button_left"
        >
          <img src={chevronLeft} alt="Précédent" />
        </button>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carrousel__image"
      />
      {pictures.length > 1 && (
        <button
          onClick={nextSlide}
          className="carrousel_button carrousel_button_right"
        >
          <img src={chevronRight} alt="Suivant" />
        </button>
      )}
      {pictures.length > 1 && (
        <div className="carrousel__counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carrousel;
