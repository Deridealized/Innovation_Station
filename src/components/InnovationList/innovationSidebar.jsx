import React from "react";
import { Innovation } from "../Innovation/Innovation";

function InnovationSidebar(props) {

  const onVote = props.onVote;
  //Local Storage to array
  const localStorageItems = Object.entries(localStorage);

  //Remove submission index for new array
  const filteredItems = localStorageItems
  .map(([key, value]) => ({
    key,
    innovation: JSON.parse(value)
  }))
  .sort((a,b) => new Date(b.innovation.timestamp) - new Date(a.innovation.timestamp));

  if (filteredItems.length === 0) {
    return (
      <div>
        No innovations found.        
      </div>
    );
  }
  
  const limitedItems = filteredItems.slice(0, 3);

  return (
    <div className="sidebar">
      
      <form className="MainForm2">
        <header>
        <h4 style={{opacity: 0.5, left: 0}}>Latest Innovations</h4>
        </header>

        <div className="sidebar-items">
        {limitedItems.map((item) => {
            const { key, innovation } = item;

            if (innovation) {
              return (
                <Innovation
                  key={key}
                  id={innovation.id}
                  idea={innovation.idea}
                  author={innovation.author}                  
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
      </form>
    </div>
  );
}

export default InnovationSidebar;