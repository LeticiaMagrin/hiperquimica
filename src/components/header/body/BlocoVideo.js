import { videos }  from "../../../Media/Media";
import React from 'react'


//css
import './BlocoVideo.css'

function BlocoVideo(){
    const{
        videoHome,
    } = videos


    return(

      <div className="main">
        <video src={videoHome} autoPlay loop muted />

      </div>
    )
}

export default BlocoVideo