import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const FlipCardContainer = (props) => { 
    const FlipCard = useSelector(state => state.UI.FlipCard);
    return(
        <div className={`flip-card  ${FlipCard}`}>
            <div className="flip-card-inner">
                 {props.children}
            </div>
        </div>
    )
}

export default FlipCardContainer;