import React from "react";
import "./Imagecard.css";

function Imagecard({ imageUrl, text}) {
  return (
    <div className="image-card">
      <div className="image-wrapper">
        <img src={imageUrl} alt={text} className="image" />
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default Imagecard;
