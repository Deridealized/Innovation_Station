import React from "react";
import Check from "../../icons/check.png"

export const CheckIcon = (props) => {

    const showCheck = () => {
        if (props.showMe) {
            return "SubmitSuccessIcon modal-buttons";
        } else {
            return "hide";
        }
    }

    const showText = () => {
        if (props.showMe) {
            return "SuccessTitle modal-buttons";
        } else {
            return "hide";
        }
    }    
    
    return (      
        <span className="modal">
        <img src={Check} alt="Checkmark" className={showCheck()}></img>
        <p  className={showText()}>{props.message}</p>        
        </span>
    );
}
