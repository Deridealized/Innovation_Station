import React from "react";


export const Innovation = (props) => {

const anonymous = props.anonymous;
const idea = props.idea;
const author = props.author;
const title = props.title;
const email = props.email;

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
        </div>
        </div>
    )
}




}
