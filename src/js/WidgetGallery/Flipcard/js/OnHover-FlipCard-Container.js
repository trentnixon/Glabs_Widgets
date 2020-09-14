import React from 'react';

const FlipCardContainer = (props) => { 
    return(
        <div className={`flip-card-hover`}>
            <div className="flip-card-inner">
                 {props.children}
            </div>
        </div>
    )
}

export default FlipCardContainer;