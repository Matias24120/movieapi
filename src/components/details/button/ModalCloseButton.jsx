import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalCloseButton = ({ handleCloseModal }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.modal-content')) {
        handleCloseModal();
      }
    };

    const handleEscapePress = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [handleCloseModal]);

  return (
    <button type="button" className="btn-modal" onClick={handleCloseModal}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

export default ModalCloseButton;