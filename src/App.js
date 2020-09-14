import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import { useSelector } from "react-redux";
import { FetchData } from "./actions/Load";
import LoadingScreen from "./js/pages/Loading";
// Include CSS
import './App.css';

// Widgets
import HowlerBasic from "./js/WidgetGallery/Audio/HowlerBasic";
import FlipOnClick from "./js/WidgetGallery/Flipcard/FlipOnClick";
import GalleryMasonary from "./js/WidgetGallery/GalleryMasonry/GalleryMasonary";
import Video from "./js/WidgetGallery/Video/Video";
import AnimatedGif from "./js/WidgetGallery/AnimatedGif/AnimatedGif"
import SingleImageGallery_GSAP from "./js/WidgetGallery/ImageGallery/SingleImagewithText1/index.js";
import SingleImageSliderGallery_GSAP from "./js/WidgetGallery/ImageGallery/SingleImageSliderGallery/index";
// Collection of Widgets

const WidgetBuilder={
  Audio:{
    Component: HowlerBasic,
    Json :'Audio.json'
  },
  Video:{
    Component: Video,
    Json :'Video.json'
  },
  OnclickFLip:{
    Component: FlipOnClick,
    Json :'OnClickFlip.json'
  },
  GalleryMasonary:{
    Component: GalleryMasonary,
    Json :'GalleryMasonary.json'
  },
  AnimatedGif:{
    Component: AnimatedGif,
    Json :'AnimatedGif.json'
  },
  SingleImageGallery_GSAP:{
    Component:SingleImageGallery_GSAP,
    Json :'SingleImageGallery_GSAP.json'
  },
  SingleImageSliderGallery_GSAP:{
    Component:SingleImageSliderGallery_GSAP,
     Json :'SingleImageGallery_GSAP.json'
  }
}


// EDIT THESE VALUES FOR EACH PROJECT
// Select a Widget from the Json file to display
// SELECT a Parent Key from the Json file above to use that Widget

  const SelectedWidget = 'Audio';

/*** *******/

const CDN = 'https://gdn-cdn.s3.amazonaws.com/embed/2020/07/WestpackAudio/';
const GACode = 'UA-76345112-27'
const Path='assets/json/';
let WidgetPath;


/** End Edit  */


/* Dont Edit */
// Set up widget Compoents and Data
const SelectedJson = WidgetBuilder[SelectedWidget].Json
const SelectedComponent = WidgetBuilder[SelectedWidget].Component

/**
 * GA Commands
 */
ReactGA.initialize(GACode);
ReactGA.pageview(window.location.pathname + window.location.search);

// Fetch Data
const Content = new FetchData();
if(process.env.NODE_ENV === 'development'){  Content.start('/'+Path+SelectedJson); }
else if(process.env.NODE_ENV === 'production'){  Content.start(CDN+Path+SelectedJson);  }
Content.start(WidgetPath);  
/* End Set up */



/** Render */
const App =(props)=>{
  const STATE = useSelector(state => state);
  useEffect(()=>{
    console.log(props)
  })
  if(STATE.UI.UI_SET !== false){ return ( 
      <SelectedComponent APP={STATE.APP.APPLICATION}/>
    );
  }
  else{ return( <LoadingScreen/> )}
}

export default App