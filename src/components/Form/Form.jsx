import React, { useState } from "react";
import { InputField } from "../inputField";
import { WarningIcon } from "../warningIcon";
import { IdeaInputField } from "../ideaInputField";
import { SubmitButton } from "../submitButton";
import { CheckIcon } from "../checkIcon";

const Form = () => {
  //Input value states
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  //These are named incorrectly, they should be invalid**
  //Bool values are flipped, don't want to re-name all.
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validJob, setValidJob] = useState(false);
  const [validIdea, setValidIdea] = useState(false);

  //Bool states, isAnon, maximum input chars
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isNameMax, setIsNameMax] = useState(false);
  const [isEmailMax, setIsEmailMax] = useState(false);
  const [isIdeaMax, setIsIdeaMax] = useState(false);
  const [isJobTitleMax, setIsJobTitleMax] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const [text, setText] = useState('')
  const updateState = (event) => {

    //validation
    switch (event.target.name) {
      case 'Name':
        console.log((event.target.value).length > 5 ? 'longer than 5' : 'less than 5')
        break;
    
      default:
        break;
    }

    
    setText(event.target.value)
  }

  //max input values
  const maxInput = 50;
  const maxIdeaInput = 2500;

  return (
    <form className={`MainForm ${submitSuccess ? "success" : ""}`}>
      <h1 className="MainTitle">Submit your idea</h1>

      <div className="InputRow">
        <InputField
          name="Name"
          isAnonymous={isAnonymous}
          setInputCallback={setUsername}
          setMaxCallback={setIsNameMax}
          setMaxInput={maxInput}
          isValid={validName}
          updateText={updateState}
          text={text}
        />
        <WarningIcon showMe={isNameMax || validName} />

        <InputField
          name="Email"
          isAnonymous={isAnonymous}
          setInputCallback={setEmail}
          setMaxCallback={setIsEmailMax}
          setMaxInput={maxInput}
          isValid={validEmail}
        />
        <WarningIcon showMe={isEmailMax || validEmail} />
      </div>

      <input
        className="InputFieldBox"
        type="checkbox"
        onClick={() => setIsAnonymous(!isAnonymous)}
      ></input>
      <p className="InlineText"> Anonymous</p>

      <InputField
        name="Job Title (Required)"
        setInputCallback={setJobTitle}
        setMaxCallback={setIsJobTitleMax}
        setMaxInput={maxInput}
        isValid={validJob}
        isAnonymous={isAnonymous}
      />
      <WarningIcon showMe={isJobTitleMax || validJob} />

      <IdeaInputField
        setInputCallback={setIdea}
        setMaxInput={maxIdeaInput}
        setMaxCallback={setIsIdeaMax}
        isValid={validIdea}
      />
      <WarningIcon showMe={isIdeaMax || validIdea} />

      <span className="buttons">
        <SubmitButton
          submitName={userName}
          submitEmail={email}
          submitJobTitle={jobTitle}
          submitIdea={idea}
          //Validity
          isAnonymous={isAnonymous}
          validNameCallback={setValidName}
          validEmailCallback={setValidEmail}
          validJobCallback={setValidJob}
          validIdeaCallback={setValidIdea}
          submitSuccessCallback={setSubmitSuccess}
        />
        <CheckIcon showMe={submitSuccess} message="Submit Successful" />
      </span>
    </form>
  );
};

export default Form;
