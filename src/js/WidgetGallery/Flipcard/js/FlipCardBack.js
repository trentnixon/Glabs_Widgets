import React from 'react';

import H1 from "../../../untilities/H1";
import H2 from "../../../untilities/H2";
import H3 from "../../../untilities/H3";
import P from "../../../untilities/Paragraph";
import FlipButton from "./Buttons/FlipButton";

const CardBack = (props)=>{
return (
    <div className="flip-card-back">
        <div className="Content">
            <H1 Copy={props.APP.FlipCard.CardBack.Header1} />
            <H2 Copy={props.APP.FlipCard.CardBack.Header2} /> 
            <H3 Copy={props.APP.FlipCard.CardBack.Header3} />
            <P Copy={props.APP.FlipCard.CardBack.Copy} />
        </div>
        <div className="meta">
            <P Copy={props.APP.FlipCard.CardBack.MetaCopy} />
            <FlipButton />
        </div>
    </div>
    )
}

export default CardBack;