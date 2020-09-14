// import React from "react";

const InitialState ={
	Data:false,
	UI:false, 
	UI_SET:false,
	ImagePath:null,
	FlipCard:true
}

const UI = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
			// Fetch Initial Meta Data
			case "STORE_DATA":{
				return {...state, Data:action.payload}
				// eslint-disable-next-line 
				break
			}	
			case "STORE_UI":{
			return {...state, UI:action.payload}
				// eslint-disable-next-line 
				break
			}	
			case "UI_SET":{
			return {...state, UI_SET:action.payload}
				// eslint-disable-next-line 
				break
			}

			case "SETFLIP":{
				return {...state, FlipCard:action.payload}
					// eslint-disable-next-line 
					break
				}
		}
		return state;
	}
export default UI;	