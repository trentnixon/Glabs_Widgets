import React ,  { useState,useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FlipButton from "../../../../untilities/svg/FlipButton"
import Button from '@material-ui/core/Button';



export default function OutlinedButtons() {
    const FlipCard = useSelector(state => state.UI.FlipCard);
    const dispatch = useDispatch()
    const onClick=()=>{
        dispatch({ type: 'SETFLIP', payload:!FlipCard })
    }
    useEffect(() => { console.log(FlipCard); },[]);
  return (

        <div className="FlipCTA" onClick={onClick}>
            <FlipButton />
        </div>

      

  );
}


/**
 *  <Button variant="outlined" color="primary" onClick={onClick}>
            <AutorenewIcon />
        </Button>
 */