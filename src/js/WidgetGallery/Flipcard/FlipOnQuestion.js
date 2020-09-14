
// Flipcard on Click

import React from 'react';
import './App.css';

// FlipCard Structure
import FlipCardContainer from "./js/OnClick-FlipCard-Container";
import FlipCardFront from "./js/FlipCardFrontwQuestion";
import FlipCardBack from "./js/FlipCardBack";

const Application =()=>{
  return(
        <FlipCardContainer>
            <FlipCardFront />
            <FlipCardBack />
        </FlipCardContainer>
  )
}
export default Application;