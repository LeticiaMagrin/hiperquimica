import {  videosIa2, videos2 , videos, imgIa} from "../../../Media/Media"

import { Link } from "react-router-dom";

import CarouselIA2 from "./CaroulselIA2";

//video Player

import 'react-html5video/dist/styles.css'

//css 
import './BlocoVideos.css'

function BlocoVideos(){


  const{
     
    Farm,

  } = imgIa

    return(
        <>
        
    <div className="bg-dark">

    <div class="container col-xl-10 col-xxl-8  py-2">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-5 text-center text-lg-start">
        <h2 class="display-4 fw-bold lh-1 text-light mb-3 headingVideos">CONTEÚDO</h2>
        <p class="col-lg-10 fs-4 text-light paragrafo-videos">A HIPERQUIMICA utiliza IAs para gerar vídeos, imagens e animações, criando conteúdos dinâmicos que sempre inovam, impulsionando o engajamento nas redes.</p>
        <Link to='/conteudo-IA' href="" className="link-videos-hq">Clique aqui &nbsp;

        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
        </Link>

      </div>
      <div className="col-6 col-sm-8 col-lg-6 ">
      
      
   
       <img className="farm" src={Farm}/>

      
 
 

        </div> 
      
        
      </div>
      <CarouselIA2 videos={videosIa2}/>
    </div>
  </div>

    
        </>
    )
}

export default BlocoVideos