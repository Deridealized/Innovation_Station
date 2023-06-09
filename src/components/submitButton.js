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
    //eslint-disable-next-line
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
    
    const generateId = () => Math.random().toString(36).substring(2, 18);
    const innovationObj = {};

    if (!isAnonymous) {
      verifyName();
      verifyEmail();
      verifyJobTitle();
      verifyIdea();
      if (
        !isUsernameInvalid &&
        !isEmailInvalid &&
        !isIdeaInvalid &&
        !isJobTitleInvalid
      ) {
        const innovationId = generateId();
        innovationObj.id = innovationId;
        innovationObj.author = username;
        innovationObj.email = email;
        innovationObj.idea = idea;
        innovationObj.jobTitle = jobTitle;
        innovationObj.anonymous = isAnonymous;
        innovationObj.score = 0;
        innovationObj.timestamp = new Date().toISOString();        

        localStorage.setItem(innovationId, JSON.stringify(innovationObj));
        

        //Green overlay
        props.submitSuccessCallback(true);
        setTimeout(() => {
          props.submitSuccessCallback(false);
        }, 3000);
      } else {

        let badName = isUsernameInvalid ? "/Name" : "";
        let badEmail = isEmailInvalid ? "/Email" : "";
        let badTitle = isJobTitleInvalid ? "/Job Title" : "";
        let badIdea = isIdeaInvalid ? "/Idea" : "";


        alert(`Please fix field(s): ${badName} ${badEmail} ${badTitle} ${badIdea}`);
      }
    } else {
      
      verifyIdea();
      if (!isIdeaInvalid) {
        const innovationId = generateId();
        innovationObj.id = innovationId;
        innovationObj.author = username;
        innovationObj.email = email;
        innovationObj.idea = idea;
        innovationObj.jobTitle = jobTitle;
        innovationObj.anonymous = isAnonymous;
        innovationObj.score = 0;
        innovationObj.timestamp = new Date().toISOString();

        localStorage.setItem(innovationId, JSON.stringify(innovationObj));

        //Green overlay
        props.submitSuccessCallback(true);
        setTimeout(() => {
          props.submitSuccessCallback(false);
        }, 3000);
      } else {
        alert(`Please fix field: Idea`)
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
