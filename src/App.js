//Created by Jamie Hey
//Prototype Innovation Portal Design for Fleetcor 2023
//The user can input their name, email, job title and idea for change.
//This is then added to localStorage pending ability to add to a Database
//You can vote on ideas
//You can browse all ideas based on their score
//You can see most recently uploaded on the right
//There is a read more button for longer ideas, to prevent information overload
//Input error handling - tells you each incorrect input field
//There is a remove all button (for testing purposes)

import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/inputField";
import { WarningIcon } from "./components/warningIcon";
import { IdeaInputField } from "./components/ideaInputField";
import { SubmitButton } from "./components/submitButton";
import { CheckIcon } from "./components/checkIcon";
import { TopBar } from "./components/topBar";
import InnovationList from "./components/innovationList";
import InnovationSidebar from "./components/innovationSidebar";
import { ImageTitle } from "./components/imageTitle";
import innovImage from "./images/iconCompass.png";
import inventImage from "./images/iconPeopleCogs.png";
import inspireImage from "./images/iconCogs.png";

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

  //Refresher
  const [refresh, setRefresh] = useState(false);

  //max input values
  const maxInput = 50;
  const maxIdeaInput = 2500;

  const handleValueChange = (newValue) => {
    setShowSubmissions(newValue);
  };

  const onVote = () => {
    setRefresh((prevRefresh) => !prevRefresh);
    console.log(`Refreshed! State: ${refresh}`);
  };

  return (
    <div className="container">
      <TopBar />
      <div className="App">
        <div className="MainHeader">
          <header>
            <h3 className="SmallTitle3">Innovation Station</h3>
            <h1 className="MainTitle2">Get Your Ideas Noticed</h1>
          </header>
        </div>
        <div className="MainContainer">
        
        <div class="ImageContainer">        
        <div className="yourideas"><h1 className="ideaheaders">Your Ideas</h1>          
          <h3 className="ideaheaders2">made real</h3>  </div> 
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
        </div>
        </div>

        <span className="iiiImages">
          <ImageTitle title="Innovate" image={innovImage} />
          <ImageTitle title="Invent" image={inventImage} />
          <ImageTitle title="Inspire" image={inspireImage} />{" "}
        </span>

        {showSubmissions ? (
          <InnovationList
            showSubmissions={showSubmissions}
            onValueChange={handleValueChange}
            onVote={onVote}
          />
        ) : (
          <button className="link-btn" onClick={() => setShowSubmissions(true)}>
            Top Rated Innovations
          </button>
        )}
      </div>
      <div className="sidebar">
        <InnovationSidebar
          showSubmissions={showSubmissions}
          onValueChange={handleValueChange}
          onVote={onVote}
        />
      </div>
    </div>
  );
}

export default App;
