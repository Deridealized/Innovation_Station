import React, { useState, useEffect } from "react";
import { Innovation } from "./innovation";

function InnovationList(props) {

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    props.onValueChange(newValue);
  }

  
  

  return (
    <div>
      <form className="MainForm2">
        <header>
          <h1 className="MainTitle">Recent innovations</h1>
        </header>

        <div className="wrapper">
          <Innovation idea="Bad idea" author="Jamie Hey" />
          <Innovation idea="Worse Idea" author="Jack Chadbury" />
          <Innovation idea="Average Idea" author="CD 'Rom' Limbu" />
          <Innovation idea="Terrible Idea" author="Phillip Marhas" />
          <Innovation idea="Awful Idea" author="Christopher Mchcggcyhahsgchee" />
          
        </div>
        <button className="link-btn" type="button" onClick={handleValueChange}>
          Close
        </button>
      </form>
    </div>
  );
}

export default InnovationList;
