import React, { useState } from "react";
import "./Modal.css"; // Import the CSS file for styling
function Modal({ isOpen, data, onClose }) {
  const [showImages, setShowImages] = useState(false);

  const handleClose = () => {
    setShowImages(false);
    onClose(); // Call the original onClose function
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{data.name}</h2>
          <button onClick={handleClose} className="close-button">
            Close
          </button>
        </div>
        <div className="modal-content">
          <p>ID: {data.id}</p>
          <p>Dataset Name: {data.Datasetname}</p>
          <p>Description: {data.description}</p>
          <p>
            Link to Download:{" "}
            <a href={data.datasetlink} target="_blank" rel="noopener noreferrer">
              {data.datasetlink}
            </a>
          </p>
          {/* Add more details as needed */}
        </div>
        <div className="modal-footer">
          <button onClick={() => setShowImages(true)}>Preview Data Set</button>
        </div>
        {showImages && (
          <div className="image-preview">
            {data.imagePath.map((imagePath, index) => (
              <a key={index} href={imagePath} target="_blank" rel="noopener noreferrer" className="image-link">
                <img src={imagePath} alt={` ${index + 1}`} className="image-style" />
              </a>
            ))}
            {/* Add more images as needed with their respective links and class names */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
