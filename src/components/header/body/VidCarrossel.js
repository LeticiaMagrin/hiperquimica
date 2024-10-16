import React, { useState, useRef } from 'react';

// video Plaer
import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'

// //media
import { videos, videos1 ,videos2, filteredVideos } from '../../../Media/Media';
// import ArtePremium_Lysol from "../../../assets/Video/ArtePremium_Lysol.mp4"
// import Ipiranga_30_Versao02_18hs from "../../../assets/Video/Ipiranga_30_Versao02_18hs.mp4"
// import Batavo_PenseZero_Animatic from "../../../assets/Video/Batavo_PenseZero_Animatic.mp4"
// import Claro_Narramatic_Linha2_Ref2 from "../../../assets/Video/Claro_Narramatic_Linha2_Ref2.mp4"

//CSS
import './VideoCarousel.css'

function VidCarrossel(){
 const [model, setModel] = useState(false);
 const data = videos2.slice(0,-1)

    return(

    <>
    <div className='gallery'>
      {data.map((item, index) =>{
        return(
          <div className='video' key={index}>
            <div className='video-container'>
              <Video
              style={{width: '100%'}}
              autoPlay={model}>
                <source src={item.videoName} type='video/webm'/>
              </Video>

            </div>
          </div>
        )

      })}
    </div>
   
    </>
  )

}

export default VidCarrossel;