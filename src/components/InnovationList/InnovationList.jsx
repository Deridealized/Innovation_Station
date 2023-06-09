import React from "react";
import { Innovation } from "../Innovation/Innovation";

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
  .sort((a,b) => b.innovation.score - a.innovation.score);

 
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
    <div className="innovation-container">
      <form className="MainForm2">
        <header className="">          
          <h4 className="SmallTitle">Your ideas are being actioned</h4>
          <h1 className="MainTitle">The following business changes started here!</h1>
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
