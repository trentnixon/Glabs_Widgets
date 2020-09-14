import React from 'react';
/*
import H1 from "../../../untilities/H1";
import H2 from "../../../untilities/H2";
import H3 from "../../../untilities/H3";
*/
import P from "../../../untilities/Paragraph";
import FlipButton from "./Buttons/FlipButton";
import FlipcardImage from "./utils/FlipCardImage";
const CardFront = (props)=>{
return (
        <div className="flip-card-front">
            <FlipcardImage IMG={props.APP.FlipCard.CardFront.Image}/>
            <div className="meta">
                <P Copy={props.APP.FlipCard.CardFront.Copy} />
                <FlipButton />
            </div>
            
        </div>
    )
}

export default CardFront;


/**
 * <H1 Copy={CardFront.Header1} />
            <H2 Copy={CardFront.Header2} />
            <H3 Copy={CardFront.Header3} />
            <P Copy={CardFront.Copy} />
 */