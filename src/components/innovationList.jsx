import React from "react";
import { Innovation } from "./innovation";

function InnovationList(props) {

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    props.onValueChange(newValue);
  };
  
  const onVote = props.onVote;
  
  const clearAll = () => {
    localStorage.clear();
    onVote();
  }
  
  //Local Storage to array
  const localStorageItems = Object.entries(localStorage);

  const filteredItems = localStorageItems
  .map(([key, value]) => ({
    key,
    innovation: JSON.parse(value)
  }))

 
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
          <h1 className="MainTitle">Browse Innovations</h1>
        </header>

        <div className="wrapper">
          {filteredItems.map((item) => {            
            const { key, innovation } = item;

            if (innovation){              
            return (
              <Innovation
                key={key}
                id={innovation.id}
                idea={innovation.idea}
                author={innovation.author}
                title={innovation.jobTitle}
                email={innovation.email}
                anonymous={innovation.anonymous}
                score={innovation.score}
                timestamp={innovation.timestamp}
                onVote={onVote}
                />
                );
            } else {
              return null;
            }
              })}
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
