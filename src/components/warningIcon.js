import React from "react";
import Warning from "../icons/warning.png"

export const WarningIcon = (props) => {

    const showError = () => {
        if (props.showMe) {
            return "InputErrorIcon";
        } else {
            return "hide";
        }
    }
    return (
        <img src={Warning} className={showError()}></img>
    );
}
