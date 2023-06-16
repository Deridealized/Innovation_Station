import React, { useState } from "react";
import { InputField } from "../InputField/InputField";
import { WarningIcon } from "../WarningIcon/WarningIcon";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { CheckIcon } from "../CheckIcon/CheckIcon";
import { Input } from "@mui/material";

const Form = (props) => {
  //Input value states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  //These are named incorrectly, they should be invalid**
  //Bool values are flipped, don't want to re-name all.
  const [validName, setValidName] = useState(null);
  const [validEmail, setValidEmail] = useState(null);
  const [validJob, setValidJob] = useState(null);
  const [validIdea, setValidIdea] = useState(null);

  //Bool states, isAnon, maximum input chars
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isNameMax, setIsNameMax] = useState(false);
  const [isEmailMax, setIsEmailMax] = useState(false);
  const [isIdeaMax, setIsIdeaMax] = useState(false);
  const [isJobTitleMax, setIsJobTitleMax] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const maxInput = 50;
  const maxIdeaInput = 2500;

  const updateState = (event) => {
    //validation
    switch (event.target.name) {
      case "Name":
        //Assign username from input
        setUsername(event.target.value);
        console.log(`username: ${username}`);
        break;

      case "Email":
        //Assign email from input
        setEmail(event.target.value);
        console.log(`Email: ${email}`);
        break;

      case "Job Title (Required)":
        setJobTitle(event.target.value);
        console.log(`Title: ${jobTitle}`);
        break;

      case "Idea":
        setIdea(event.target.value);
        console.log(`Idea : ${idea}`);
        break;

      default:
        break;
    }
  };

  const handleRefresh = () => {
    props.onVote();
  }

  const validateForm = () => {
    
    console.log("validateform" + validName, validEmail, validJob, validIdea);
  };

  const submitForm = () => {
    const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const regexEmail =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    setValidName(regexName.test(username));
    setValidEmail(regexEmail.test(email));
    setValidJob(jobTitle.length > 0);
    setValidIdea(idea.length > 0);

    const generateId = () => Math.random().toString(36).substring(2, 18);
    const innovationObj = {};

    console.log("submitform" + validName, validEmail, validJob, validIdea);

    if (!isAnonymous) {
      if (validName && validEmail && validIdea && validJob) {
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
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        let badName = !validName ? "/Name" : "";
        let badEmail = !validEmail ? "/Email" : "";
        let badTitle = !validJob ? "/Job Title" : "";
        let badIdea = !validIdea ? "/Idea" : "";

        alert(
          `Please fix field(s): ${badName} ${badEmail} ${badTitle} ${badIdea}`
        );
      }
    } else {
      if (validIdea) {
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
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        alert(`Please fix field: Idea`);
      }
    }
  };

  return (
    <form className={`MainForm ${submitSuccess ? "success" : ""}`}>
      <h1 className="MainTitle">Submit your idea</h1>

      <div className="InputRow">
        <InputField
          name="Name"
          isAnonymous={isAnonymous}
          setMaxCallback={setIsNameMax}
          setMaxInput={maxInput}
          isValid={validName}
          updateText={updateState}
        />
        <WarningIcon showMe={(isNameMax || (!validName && validName !== null)) && !isAnonymous } />

        <InputField
          name="Email"
          isAnonymous={isAnonymous}
          setMaxCallback={setIsEmailMax}
          setMaxInput={maxInput}
          isValid={validEmail}
          updateText={updateState}
        />
        <WarningIcon
          showMe={(isEmailMax || (!validEmail && validEmail !== null))  && !isAnonymous }
        />
      </div>

      <input
        type="checkbox"
        onClick={() => setIsAnonymous(!isAnonymous)}
      />
      <p className="InlineText"> Anonymous</p>

      <InputField
        name="Job Title (Required)"
        setMaxCallback={setIsJobTitleMax}
        setMaxInput={maxInput}
        isValid={validJob}
        isAnonymous={isAnonymous}
        updateText={updateState}
      />
      <WarningIcon showMe={(isJobTitleMax || (!validJob && validJob !== null))  && !isAnonymous} />

      <InputField
        name="Idea"
        setMaxInput={maxIdeaInput}
        setMaxCallback={setIsIdeaMax}
        isValid={validIdea}
        updateText={updateState}
        isIdeaField={true}
      />
      <WarningIcon showMe={isIdeaMax || (!validIdea && validIdea !== null)} />

      <span className="buttons">
        <SubmitButton
          submitForm={submitForm}
          submitSuccessCallback={setSubmitSuccess}
        />
        <CheckIcon showMe={submitSuccess} message="Submit Successful" />
      </span>
    </form>
  );
};

export default Form;
