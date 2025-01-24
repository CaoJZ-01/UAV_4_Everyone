import React from 'react';
import './Previewstyle.css';

const Datasetpreview = ({ imagePaths }) => {
  return (
    <div>
      <h2>Image Preview</h2>
      <div className="image-container">
        {imagePaths.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Datasetpreview;
