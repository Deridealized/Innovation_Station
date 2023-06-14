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
import { LatestTechNews } from "./components/latestTechNews";
import Form from "./components/Form/Form"

function App() {
  const [showSubmissions, setShowSubmissions] = useState(false);
  //Refresher
  const [refresh, setRefresh] = useState(false);



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
        <div>
        <p>The Fleetcor innovation portal has been designed by our apprentices to allow your voice to be heard.</p>
        <p>Submit your ideas and innovations using the form below</p>
        </div>
        <div className="MainContainer">
          <div className="ImageContainer">
            <div className="yourideas">
              <h1 className="ideaheaders">Your Ideas</h1>
              <h3 className="ideaheaders2">made real</h3>{" "}
            </div>
            <Form />
          </div>
        </div>

        <div className="iiiImages">
          <ImageTitle title="Innovate" image={innovImage} />
          <ImageTitle title="Invent" image={inventImage} />
          <ImageTitle title="Inspire" image={inspireImage} />{" "}
        </div>

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
        <LatestTechNews />      
      </div>
    </div>
  );
}

export default App;
