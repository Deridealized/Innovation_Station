import React from 'react';

export const AttachmentButton = (props) => {
    
    

    return (
        <button className={"attachment-btn " + props.showMe} type="file" accept="image/*">
            Attach File
          </button>
    );
}

