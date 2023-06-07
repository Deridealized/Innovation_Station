import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, {useEffect, useState} from "react";


export const Innovation = (props) => {
const [score, setScore] = useState(props.score || 0);

const id = props.id;
const anonymous = props.anonymous;
const idea = props.idea;
const author = props.author;
const title = props.title;
const email = props.email;
const timestamp = new Date(props.timestamp)
const formattedTime = timestamp.toLocaleTimeString();
const formattedDate = timestamp.toLocaleDateString();


  
  const handleScoreChange = (vote) => {
    const storedInnovation = JSON.parse(localStorage.getItem(id));
    if (storedInnovation) {
      storedInnovation.score += vote;
      localStorage.setItem(id, JSON.stringify(storedInnovation));
      setScore(storedInnovation.score);
    }
  };

if (anonymous) {
    return (
        <div className="">
        <div className="ideaForm">
            <h4 className="AuthorBox">
                {"Anonymous"}
            </h4> 
            <p className="IdeaBox">
                {idea}
            </p>   
            <h6 className="EmailBox">
                Uploaded on {formattedDate} at {formattedTime}
            </h6>
            <button className="link-btn" type="button" onClick={() => handleScoreChange(1)}> ↑ </button>
            <button className="link-btn" type="button" onClick={() => handleScoreChange(-1)}> ↓ </button>
            {score}
        </div>
        
        </div>
    )
} else {
    return (
        <div className="">
        <div className="ideaForm">
            <h4 className="AuthorBox">
                {author}
            </h4>
            <h5 className="TitleBox">
                {title}
            </h5>
            <h6 className="EmailBox">
                {email}
            </h6>
    
            <p className="IdeaBox">
                {idea}
            </p>   
            <h6 className="EmailBox">
                Uploaded on {formattedDate} at {formattedTime}
            </h6>
            <button className="link-btn" type="button" onClick={() => handleScoreChange(1)}> ↑ </button>
            <button className="link-btn" type="button" onClick={() => handleScoreChange(-1)}> ↓ </button>
            {score}
        </div>
        </div>
    )
}




}
