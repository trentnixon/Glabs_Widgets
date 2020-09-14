import React ,  { useState,useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux";

const FlipCardContainer = (props) => { 
    const [Flip, setFlip] = useState(true); 
   useEffect(() => { setTimeout(() => { setFlip(!Flip)}, 5000); },[Flip]);

    return(
        <div className={`flip-card OnTimer ${Flip}`}>
            <div className="flip-card-inner">
                 {props.children}
            </div>
        </div>
    )
}

export default FlipCardContainer;