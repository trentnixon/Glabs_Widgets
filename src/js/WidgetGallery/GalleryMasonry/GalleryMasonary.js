import React from 'react';
import ImageMasonry from 'react-image-masonry';
import { isMobile} from "react-device-detect";

function CheckMobile(){
    console.log("Check Mobile", isMobile)
    if(isMobile){ return 2} else{ return 4}
}

const GalleryContainer = (props)=>{
    return(
        <ImageMasonry  
            imageUrls={props.APP.GalleryMasonary.images}
            numCols={CheckMobile()}
            containerWidth={"100%"}
            forceOrder={true} 
        />
    )
}

export default GalleryContainer;