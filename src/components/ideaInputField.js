
import React, { useState } from "react";


export const IdeaInputField = (props) => {    
        
    const maxChars = props.setMaxInput;        

        const maxError = (e) => {           
            return props.setMaxCallback(e.length === maxChars);
        }

        const invalidInput = () => {
            if (props.isValid) {
              return { borderColor: "#c02323" };
            } else if (props.isValid) {
              return { borderColor: "#2699FB" };
            }
          };

        return (  
            <textarea
            className="IdeaInputField"
            rows="4"
            cols="50"
            placeholder="Enter your idea (2500 Character Limit)"
            maxLength="2500"
            onChange={(e) => {
                props.setInputCallback(e.target.value);
                maxError(e.target.value)}}
                style={invalidInput()}
          ></textarea>                         
        );    
}