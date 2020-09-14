import React ,  { useState,useEffect }from 'react';
import videojs from 'video.js'
import './SCSS/Video.css';

class VideoPlayer extends React.Component {
    componentDidMount() {
      // instantiate Video.js
      this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this)
      });
    }
  
    // destroy player on unmount
    componentWillUnmount() {
      if (this.player) {
        this.player.dispose()
      }
    }
  
    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
      return (
        <div className="VideoOuter">
            <div className="VideoContainer">	
                    <div data-vjs-player >
                        <video ref={ node => this.videoNode = node } className="video-js vjs-theme-city"></video>
                    </div>
                    </div>
        </div>
        
      )
    }
  }




const Video = (props)=>{
    const [VideoData,setVideoData] = useState(props.APP.Video)
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
          src: VideoData.src,
          type: 'video/mp4'
        }]
      }
    useEffect(()=>{ })
    return(<VideoPlayer { ...videoJsOptions } /> )
}

export default Video;