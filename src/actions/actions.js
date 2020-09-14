import store from "../store/store";
import ReactGA from 'react-ga';



export function GA(c,a,l){
    ReactGA.event({
        category:c,
        action:a,
        label:l
      });
}

function getstate(){
    return store.getState().UI.FLIPSTATE;
}

export function openall(SET){
    let STATE= getstate();

   // console.log(STATE);

    if(SET === true){
        //console.log(SET , STATE);
        STATE = !STATE;
        
        store.dispatch({ type:"FLIP_STATE", payload:STATE });
    }
    store.dispatch({ type:"SET_FLIP", payload:SET });
}

export function TrackOpen(i,a){
 
        // console.log(a,  a.indexOf(i))

      let index = a.indexOf(i);
      if(index=== -1){
            a.push(i)
      }
      else{
        a.splice(index, 1);
      }

      store.dispatch({ type:"TRACK_CARD", payload:a});  
}