import React from "react";
import FCLogo from "../../icons/flclogo.png";
import SearchLogo from "../../icons/search.png";

export const TopBar = () => {
    return (
        <div className="TopBar">
            <span className="TopBarHolder">
                <img src={FCLogo} alt="FCLogo" className="HeaderLogo"></img>
                <img src={SearchLogo} alt="SearchLogo" className="HeaderLogo2"></img>
                <input
                    className="SearchBar"
                    placeholder="Search Innovations"
                ></input>
                <button className="TopBarIdea-btn submit-btn">My Ideas</button>
            </span>
            <span className="TopBarRight">
                
            </span>
        </div>
    );
};
