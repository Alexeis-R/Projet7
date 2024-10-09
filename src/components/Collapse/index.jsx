import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse">
      <button onClick={toggle}>
        <span className="collapse-title">{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-icon ${isOpen ? "open" : ""}`}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapse_content ${isOpen ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;
