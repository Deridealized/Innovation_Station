//Created by Jamie Hey
//Prototype Innovation Portal Design for Fleetcor 2023
//After taking 2 weeks off I have come back to this and it may as well be in Chinese.

import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/inputField";
import { WarningIcon } from "./components/warningIcon";
import { IdeaInputField } from "./components/ideaInputField";
import { SubmitButton } from "./components/submitButton";
import { CheckIcon } from "./components/checkIcon";
import { TopBar } from "./components/topBar";
import InnovationList from "./components/innovationList";

//TODO
// Submit data to a DB

function App() {
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
  const [showSubmissions, setShowSubmissions] = useState(false);

  //Bool states, isAnon, maximum input chars
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isNameMax, setIsNameMax] = useState(false);
  const [isEmailMax, setIsEmailMax] = useState(false);
  const [isIdeaMax, setIsIdeaMax] = useState(false);
  const [isJobTitleMax, setIsJobTitleMax] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  //max input values
  const maxInput = 50;
  const maxIdeaInput = 2500;

  return (
    <div className="App">
      <TopBar />
      <form className={`MainForm ${submitSuccess ? "success" : ""}`}>
        <header>
          <h3 className="SmallTitle">Innovation Station</h3>
          <h1 className="MainTitle">Get Your Ideas Noticed</h1>
        </header>

        <div className="InputRow">
          <InputField
            name="Name"
            isAnonymous={isAnonymous}
            setInputCallback={setUsername}
            setMaxCallback={setIsNameMax}
            setMaxInput={maxInput}
            isValid={validName}
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
        <a className="InlineText"> Anonymous</a>

        <InputField
          name="Job Title (Required)"
          setInputCallback={setJobTitle}
          setMaxCallback={setIsJobTitleMax}
          setMaxInput={maxInput}
          isValid={validJob}
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

      {showSubmissions ? (
        <InnovationList showSubmissions={showSubmissions}/>
      ) : (
        <button className="link-btn" onClick={() => setShowSubmissions(true)}>
          Browse Innovations
        </button>
      )}
    </div>
  );
}

export default App;
