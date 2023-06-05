import React, { useState, useEffect } from "react";
import { Innovation } from "./innovation";

function InnovationList(props) {

  

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    props.onValueChange(newValue);
  };

  //Local Storage to array
  const localStorageItems = Object.entries(localStorage);

  //Remove submission index for new array
  const filteredItems = localStorageItems.filter(x  => !x.includes("submissionIndex"))

  return (
    <div>
      <form className="MainForm2">
        <header>
          <h1 className="MainTitle">Recent innovations</h1>
        </header>

        <div className="wrapper">
          {filteredItems.map(([key, value], index) => (
            <Innovation
              key={index}
              idea={value}
              author={key.substring(0, key.length - 1)}
              />
          ))}
        </div>
        <button className="link-btn" type="button" onClick={handleValueChange}>
          Close
        </button>
      </form>
    </div>
  );
}

export default InnovationList;
