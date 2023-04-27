import React from 'react'

export const ConfirmationModal = ({onConfirm, onCancel}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to submit?</p>
        <div className="modal-buttons">
          <button className='submit-btn' onClick={onConfirm}>Yes</button>
          <button className='attachment-btn' onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

