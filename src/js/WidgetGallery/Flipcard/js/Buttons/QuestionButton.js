import React ,  { useState,useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';



export default function OutlinedButtons(props) {
    const FlipCard = useSelector(state => state.UI.FlipCard);
    const dispatch = useDispatch()
    const onClick=(a)=>{
        if(a == true){
            dispatch({ type: 'SETFLIP', payload:!FlipCard })
        }
       
    }
    useEffect(() => { console.log(FlipCard); },[]);
  return (

      <Button variant="outlined" color="primary" onClick={()=>{onClick(props.a)}}>
            {props.q}
      </Button>

  );
}
