import React ,  { useState,useEffect }from 'react';
import './AnimatedGif.css';

const AnimatedGif = (props)=>{
    const [GifData,setGifData] = useState(props.APP.AnimatedGif)

    useEffect(()=>{ })
    return(
            <div className="AnimatedGif">
                <img src={GifData.src} id="" alt=""/>
            </div>
     )
}

export default AnimatedGif;