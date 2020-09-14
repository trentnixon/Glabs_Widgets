import React, {useEffect, useState,createRef,  useRef} from 'react';

// GSAP
import {gsap} from 'gsap'
import "./scss/Application.css"


const GSAP_Gallery_v1 = (props)=>{

    const [Gallery, setGallery] = useState(props.APP.Gallery)
    let GSAP_Gallery_v1 = useRef(null)
    let Circle = useRef(null)

    const ImageSrcRef = useRef(Gallery.map(() => createRef()))
    const ImageCopy = useRef(Gallery.map(() => createRef()))
    const ImageCopyH2 = useRef(Gallery.map(() => createRef()))
    const ImageCopyP = useRef(Gallery.map(() => createRef()))
    

    const ImageReveal = (ImageSrc)=>{
        const tl = gsap.timeline();
          tl.fromTo(ImageSrc, 
                { scale:.2, x:0,  yPercent:-100, opacity:0, ease: "none"}, 
                { scale:.5, x:0, yPercent:0, opacity:1, duration:.8, ease: "power2.inOut" })
            .to(ImageSrc, {scale:1,  duration:1.2})
        return tl
    }

    const ImageHide = (ImageSrc)=>{
        const tl = gsap.timeline();
        tl.fromTo(ImageSrc, 
              { scale:1, x:0,  yPercent:0, opacity:1, ease: "none", ease: "power2.inOut"}, 
              { scale:.5, x:0, yPercent:0, opacity:.3, duration:.6, ease: "power2.inOut" })
          .to(ImageSrc, {scale:.2, x:0,  yPercent:100, duration:.8})
      return tl
    }

    const ShowContent = (Container,Title, Para)=>{
            const tl = gsap.timeline({id:"Content"});
            
            tl.fromTo(Container, {opacity:0, yPercent:100, duration:1.2},{yPercent:0,opacity:1, duration:1.2, ease: "power2.inOut"})
                .fromTo(Title, {opacity:0},{opacity:1, yPercent:10, duration:.5,},"-=.3")
                .fromTo(Para, {opacity:0},{opacity:1, yPercent:-10, duration:.5,},"-=.5")
        
            return tl
    }

    const HideContent = (Container,Title, Para)=>{
        const tl = gsap.timeline({id:"Content"});
        tl.to(Title, {opacity:0, yPercent:-30,  duration:.8}, "-=.5")
            .to(Para, {opacity:0,  yPercent:30,  duration:.8},"-=.8")
            .fromTo(Container, {yPercent:0},{yPercent:100, duration:.8},"-=.5")
        return tl
    }

    const LoopDataAdd = (Data)=>{
        const tl = gsap.timeline();
        Data.map((item , i)=>{
                tl.add( ImageReveal(ImageSrcRef.current[i]))
               .add(ShowContent(ImageCopy.current[i],ImageCopyH2.current[i], ImageCopyP.current[i]), "-=1")
               .add(HideContent(ImageCopy.current[i],ImageCopyH2.current[i], ImageCopyP.current[i]), "+=3")
               .add( ImageHide(ImageSrcRef.current[i]))
        })
        return tl;
    }

    const CreateMaster = (Data)=>{
        const Master = gsap.timeline({repeat:-1});

        Master.set(".Image",{opacity:0})
        Master.add(LoopDataAdd(Data))
    }

    useEffect(()=>{ CreateMaster(Gallery) },[ImageSrcRef])


        return(
            <section className="GSAP_Gallery_v2"   ref={el=>{ GSAP_Gallery_v1 = el}}>
                    <div
                        className="SingleImageSliderGallery"
                    >
                        {
                            Gallery.map((item, i )=>{
                                return(
                                    <div key={i} >
                                        <div className="Image" style={{opacity:0}} ref={el => ImageSrcRef.current[i] = el} >
                                            <img src={item.Image}/>
                                        </div>
                                            <div className="Content" ref={el=>{ ImageCopy.current[i]= el}}>
                                                <h2 ref={el => ImageCopyH2.current[i] = el}>{item.Title}</h2> 
                                                <p ref={el => ImageCopyP.current[i] = el}>
                                                    {item.Copy}
                                                </p>
                                            </div>
                                        </div>
                                   
                                )
                            })
                        }

                    </div>
            </section>
        )
}
export default GSAP_Gallery_v1

/**
 *   <div className="Mask"></div>
                            <div id="circle"  ref={el=>{ Circle= el}} >
                                <svg  viewBox="0 0 100 100" >
                                    <circle cx="50" cy="50" r="50" />
                                </svg>
                            </div>
 */