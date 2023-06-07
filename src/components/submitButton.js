import React, { useState } from "react";
import { ConfirmationModal } from "./confirmationModal";
import { AttachmentButton } from "./attachmentButton";

export const SubmitButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  let username = props.submitName;
  let email = props.submitEmail;
  let jobTitle = props.submitJobTitle;
  let idea = props.submitIdea;
  let isAnonymous = props.isAnonymous;

  let isUsernameInvalid = false;
  let isEmailInvalid = false;
  let isJobTitleInvalid = false;
  let isIdeaInvalid = false;

  const verifyName = () => {
    const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    isUsernameInvalid = !regexName.test(username);
    return props.validNameCallback(isUsernameInvalid);
  };

  const verifyEmail = () => {
    const regexEmail =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    isEmailInvalid = !regexEmail.test(email);
    return props.validEmailCallback(isEmailInvalid);
  };

  const verifyJobTitle = () => {
    isJobTitleInvalid = !jobTitle.length > 0;
    return props.validJobCallback(isJobTitleInvalid);
  };

  const verifyIdea = () => {
    isIdeaInvalid = !idea.length > 0;
    return props.validIdeaCallback(isIdeaInvalid);
  };

  const confirmForm = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    submitForm();
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const submitForm = () => {
    const innovationObj = {};
    const generateId = () => Math.random().toString(36).substring(2, 18);

    verifyName();
    verifyEmail();
    verifyJobTitle();
    verifyIdea();

    if (!isAnonymous) {
      if (
        !isUsernameInvalid &&
        !isEmailInvalid &&
        !isIdeaInvalid &&
        !isJobTitleInvalid
      ) {
        innovationObj.author = username;
        innovationObj.email = email;
        innovationObj.idea = idea;
        innovationObj.jobTitle = jobTitle;
        innovationObj.anonymous = isAnonymous;

        localStorage.setItem(generateId(), JSON.stringify(innovationObj));

        //Green overlay
        props.submitSuccessCallback(true);
        setTimeout(() => {
          props.submitSuccessCallback(false);
        }, 3000);
      } else {
        alert("Please enter valid credentials");
      }
    } else {
      if (!isIdeaInvalid) {
        innovationObj.author = username;
        innovationObj.email = email;
        innovationObj.idea = idea;
        innovationObj.jobTitle = jobTitle;
        innovationObj.anonymous = isAnonymous;

        localStorage.setItem(generateId(), JSON.stringify(innovationObj));

        //Green overlay
        props.submitSuccessCallback(true);
        setTimeout(() => {
          props.submitSuccessCallback(false);
        }, 3000);
      } else {
        alert("Please enter valid credentials");
      }
    }
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
