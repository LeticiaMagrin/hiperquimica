import { videos, videos2 } from "../../../Media/Media"
import VidCarrossel from "./VidCarrossel"
import { Link } from "react-router-dom";

//video Player
import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'

//css 
import './BlocoAnimatics.css'

function BlocoAnimatics(){

  const{
  
    Claro_Narramatic_Linha2_Ref2

  } = videos

    return(
        <>
        
    <div className="bg-dark">

    <div className="container col-xl-10 col-xxl-8  py-2">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-5 text-center text-lg-start" id="hiperquimica-animatics">
        <h2 className="display-4 fw-bold lh-1 text-light mb-3">2D ANIMATIC</h2>
        <p className="col-lg-10 fs-4 text-light animatics-texto-hiper">Roteiros são transformados em cenas animadas com ilustrações originais que capturam a essência de cada narrativa. Roteiros que ganham vida quadro a quadro</p>
       
        <Link to="/animatics" className="text-light">Clique aqui &nbsp; 
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>

        </Link>
      </div>
      <div className="col-12 col-sm-8 col-lg-7 ">
      <div className="embed-responsive embed-responsive-16by9 ">
      <div className='vid'>
      
      <div className='video-container pt-4'>
        <Video
        
        >
          <source src={Claro_Narramatic_Linha2_Ref2} type='video/webm'/>
        </Video>

      </div>
    </div>
      {/* <iframe
      src={Claro_Narramatic_Linha2_Ref2}
      allowfullscreen
      style={{ width: '120%', height: '400px' }}
      /> */}
        </div> 
      
        
      </div>
      <VidCarrossel videos={videos2}/>
    </div>
  </div>
    </div>
        </>
    )
}

export default BlocoAnimatics