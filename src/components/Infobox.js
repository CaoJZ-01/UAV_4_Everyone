// src/Infobox.js

import React, { useState } from 'react';
import './Infobox.css';

function Infobox({ title, content }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const boxClassName = `info-box ${isClicked ? 'clicked' : ''}`;

  return (
    <div className={boxClassName} onClick={handleClick}>
      <h2 className="info-box-title">{title}</h2>
      <p className="info-box-content">{content}</p>
    </div>
  );
}

export default Infobox;
