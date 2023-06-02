import React from "react";


export const Innovation = (props) => {

const idea = props.idea;
const author = props.author;

return (
    <div className="">
    <div className="ideaForm">
        <h6 className="AuthorBox">
            {author}
        </h6>
        <p className="IdeaBox">
            {idea}
        </p>
        


    </div>
    </div>
)}
