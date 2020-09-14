import React ,  { useState,useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux";
import H1 from "../../../untilities/H1";

import H2 from "../../../untilities/H2";
import H3 from "../../../untilities/H3";
import P from "../../../untilities/Paragraph";
import QuestionButton from "./Buttons/QuestionButton";

const Arr = [{q:'question1',v:false},{q:'question2',v:true},{q:'question3',v:false}];

const CardFront = ()=>{
    const Front = useSelector(state => state.APP.APPLICATION[0]);
    const [CardFront, setFront] = useState(Front[0]); 
   // const [Str, setStr] = useState(JSON.parse(JSON.stringify(CardFront.answer))); 
    useEffect(() => {
        console.log(CardFront.answer);
        //setStr(JSON.stringify(CardFront.answer))
        //setStr(JSON.parse(Str));
    },[]);
return (
        <div className="flip-card-front">
            <H1 Copy={CardFront.Header1} />
            <H2 Copy={CardFront.Header2} />
            <H3 Copy={CardFront.Header3} />
            <P Copy={CardFront.Copy} />
           
            {
                
                Arr.map((m,i)=>{
                    console.log(m)
                    return (
                        <QuestionButton
                            key={i}
                            q={m.q}
                            a={m.v}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardFront;