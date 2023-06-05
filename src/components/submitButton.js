import React, { useState } from "react";
import { ConfirmationModal } from "./confirmationModal";
import { AttachmentButton } from "./attachmentButton";


export const SubmitButton = props => {
  const [showModal, setShowModal] = useState(false);
  const [submissionIndex, setSubmissionIndex] = useState(Number(localStorage.submissionIndex || 0));

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
    const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
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
  }

  const handleConfirm = () => {
    submitForm();
    setShowModal(false);
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const submitForm = () => {
    if (isAnonymous) {
      verifyJobTitle();
      verifyIdea();
      if (!isJobTitleInvalid && !isIdeaInvalid) {

        //send Job Title and Idea
        props.submitSuccessCallback(true);

        setTimeout(() => {
          props.submitSuccessCallback(false);
        }, 3000);

      } else if(isJobTitleInvalid && isIdeaInvalid) {
        
        // CREATE WARNING TO CHECK INPUT
      }
    } else if (!isAnonymous) {
      verifyName();
      verifyEmail();
      verifyJobTitle();
      verifyIdea();
      if (!isUsernameInvalid && !isEmailInvalid && !isJobTitleInvalid && !isIdeaInvalid){
        
        
        
        localStorage.setItem(`${username}${submissionIndex}`, idea);
        localStorage.setItem("submissionIndex", submissionIndex)
        setSubmissionIndex((prevSubmissionIndex) => prevSubmissionIndex + 1);

        console.log(`Submission Index: ${submissionIndex}`)
        console.log(`${Object.keys(localStorage)}`)
 
        //send Job Title and Idea
        props.submitSuccessCallback(true);

        setTimeout(() => {
          props.submitSuccessCallback(false);
        }, 3000);
        
      } else {
        // CREATE WARNING TO CHECK INPUT
      }
    }
  };

  const showSubmit = () => {
    if(showModal){
      return "hide"
    } else if (!showModal){
      return "submit-btn"
    }
  }

  return (
    <div>
    <button className={showSubmit()} type="button" onClick={confirmForm}>
      Submit
    </button>
    <AttachmentButton showMe={showSubmit()}/>
    
    {showModal && (
      <ConfirmationModal onConfirm={handleConfirm} onCancel={handleCancel} />
    )}
    </div>
  );
};
