
// Flipcard on Timer

import React from 'react';
import './App.css';

// FlipCard Structure
import FlipCardContainer from "./js/OnTimer-FlipCard-Container";
import FlipCardFront from "./js/FlipCardFront";
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