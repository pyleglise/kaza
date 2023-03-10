import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../utils/style/_collapses.scss";

function Collapse({ title, children, isOpen = false }) {
  const [visible, setVisible] = useState(isOpen);

  const display = () => {
    setVisible(!visible);
  };

  return (
    <section className="collapse-section">
      <div className="collapse-title-container">
        <h2 className="collapse-title">{title && title}</h2>
        <p onClick={display} className="collapse-icon">
          {visible ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </p>
      </div>
      <div className="collapse-description">
        {visible && <div className="info-description">{children}</div>}
      </div>
    </section>
  );
}

export default Collapse;
