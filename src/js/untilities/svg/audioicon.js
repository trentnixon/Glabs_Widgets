import React ,  { useState , useEffect}from 'react';

const AudioIcon =(props)=>{
    const [pluse, setPulse] = useState(''); 
    useEffect(()=>{ if(props.pulse){setPulse('pulse')}else{setPulse('')} },[props.pulse])
    return(
            <svg className={"AudioIcon " + pluse} viewBox="0 0 300 300">
                    <g>
                        <polygon points="143.5,89.7 108.2,125 84,125 77.6,131.3 77.6,167 83.4,172.7 107.9,172.7 143.5,208.3 150.2,208.3 150.2,89.7 	"/>
                        <path  d="M210.9,148.8c0,17.8-6.1,34.1-16.2,47.1l3.6,3.6c14.6-12,24-30.3,24-50.7c0-20.4-9.3-38.7-24-50.7l-3.6,3.6
                            C204.8,114.7,210.9,131.1,210.9,148.8"/>
                        <path d="M177,148.8c0,10.3-3.1,19.8-8.4,27.8l4.2,4.2c8.2-8.2,13.3-19.5,13.3-32c0-12.5-5.1-23.8-13.3-32l-4.2,4.2
                            C173.9,129,177,138.6,177,148.8"/>
                    </g>
            </svg>
        )
}
export default AudioIcon;