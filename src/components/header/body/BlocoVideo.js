import { videos }  from "../../../Media/Media";
import React from 'react'


//css
import './BlocoVideo.css'

function BlocoVideo(){
    const{
        videoHome1,
    } = videos


    return(

      <div className="main1">
        <video src={videoHome1} autoPlay loop muted />

      </div>
    )
}

export default BlocoVideo