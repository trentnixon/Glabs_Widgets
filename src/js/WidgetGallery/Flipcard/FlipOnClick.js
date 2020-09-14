
// Flipcard on Click

import React from 'react';
import './App.css';

// FlipCard Structure
import FlipCardContainer from "./js/OnClick-FlipCard-Container";
import FlipCardFront from "./js/FlipCardFront";
import FlipCardBack from "./js/FlipCardBack";


const Application =(props)=>{
  return( 
        <FlipCardContainer>
            <FlipCardFront {... props}/>
            <FlipCardBack {... props}/>
        </FlipCardContainer>
  )
}
export default Application;