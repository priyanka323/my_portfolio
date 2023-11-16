import React from 'react';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <img src={image} alt="Full Screen" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
