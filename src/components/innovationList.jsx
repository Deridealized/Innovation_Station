import React, {useState} from "react";
import { Innovation } from "./innovation";

function InnovationList(props) {

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    props.onValueChange(newValue);
  };
  
  const clearAll = () => {
    localStorage.clear();
  }
  
  //Local Storage to array
  const localStorageItems = Object.entries(localStorage);

  //Remove submission index for new array
  const filteredItems = localStorageItems.filter(x  => !x.includes("submissionIndex"))
 
  if (filteredItems.length === 0) {
    return (
    <div>No innovations found.
      <button className="link-btn" type="button" onClick={handleValueChange}>
          Close
        </button>
    </div>
    )
  }

  return (
    <div>
      <form className="MainForm2">
        <header>
          <h1 className="MainTitle">Recent innovations</h1>
        </header>

        <div className="wrapper">
          {filteredItems.map(([username, submissionArray], index) => (
            <Innovation
              key={index}
              idea={JSON.parse(submissionArray)[0]}
              author={username}
              title={JSON.parse(submissionArray)[1]}
              email={JSON.parse(submissionArray)[2]}
              />
          ))}
        </div>
        <button className="link-btn" type="button" onClick={handleValueChange}>
          Close
        </button>
        <button className="del-btn" type="button" onClick={clearAll}>
          Remove All
        </button>
      </form>
    </div>
  );
}

export default InnovationList;
