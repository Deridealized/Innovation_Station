import React, { useState } from "react";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { AttachmentButton } from "../AttachmentButton/AttachmentButton";

export const SubmitButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  const confirmForm = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    props.submitForm();
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  
  //Confirmation Modal
  const showSubmit = () => {
    if (showModal) {
      return "hide";
    } else if (!showModal) {
      return "submit-btn";
    }
  };

  return (
    <div>
      <button className={showSubmit()} type="button" onClick={confirmForm}>
        Submit
      </button>
      <AttachmentButton showMe={showSubmit()} />

      {showModal && (
        <ConfirmationModal onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
};
