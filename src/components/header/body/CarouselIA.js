import React, { useState, useRef } from 'react';

// video Plaer
import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'

// //media
import { videos, videosIa , filteredVideosIa } from '../../../Media/Media';


//CSS
import './VideoCarousel.css'

function CarouselIA(){
 const [model, setModel] = useState(false);
 const data = videosIa.slice(0,-1)

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

export default CarouselIA;