// Docs
// https://www.npmjs.com/package/react-howler

import React ,  { useState,useEffect, useRef }from 'react';
import ReactHowler from 'react-howler'
import './scss/AudioBasic.css';
import AudioIcon from "../../untilities/svg/audioicon"
import AudioPlay from "../../untilities/svg/audioPlay"
import AudioPause from "../../untilities/svg/audioPause"

import {GA} from "../../../actions/actions";

const HowlerBasic = (props)=>{

    let  PlayerRef = useRef(null)

    let AudioFile=2;
    const {title,description,mp3} = props.APP.Audio[AudioFile]

    const BtnPlay = <button onClick={()=>{handlePlay()}}><AudioPlay className="Play" /></button>;
    const BtnPause = <button  onClick={()=>{handlePause()}}><AudioPause className="Pause" /></button>

    const [playing, setplaying] = useState(false); 
    const [BufferingState, setBufferingState] = useState(false)
    const [playingValue, setplayingValue] = useState(BtnPlay); 
    const [Buffering, setBuffering] = useState("")
  
    
    const handlePlay=()=>{

       // console.log(BufferingState);
        if(!BufferingState){ setBuffering("Loading Audio") }
        
        setplaying(true) 
        setplayingValue(BtnPause)

        GA(
            "Audio",
            `Play - ${title}`,
            mp3
        )
    }
    
    const handlePause = ()=>{ 
        console.log(BufferingState);
        setplaying(false);
        setplayingValue(BtnPlay);
        GA(
            "Audio",
            `Pause - ${title}`,
            mp3
        )
    }

    const _OnLoad= ()=>{
        console.log( "_OnLoad");
        setBuffering("")
        setBufferingState(true)
    }

    const _onPlay = ()=>{
        console.log(BufferingState);
        console.log( "_onPlay");
        setBuffering("")
        setBufferingState(true)
        
    }

    useEffect(()=>{
        console.log(BufferingState);
    },[BufferingState])

    return (
        <div className="Audio">
             <div className={Buffering}>{Buffering}</div>
            <div className="Meta">
                <h1> <AudioIcon pulse={playing}/> {title}</h1>
                <p>{description}</p>
            </div>
                <div className="Player">
                    <ReactHowler 
                        src={mp3} 
                        onLoad={_OnLoad} 
                        onPlay={_onPlay} 
                        playing={playing}
                        ref={PlayerRef}
                    />   
                <div className="controls"> {playingValue}</div>
                
            </div>
        </div>
    )
}
export default HowlerBasic;