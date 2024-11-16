import { videos, videosIa }  from "../../../Media/Media";
import { images } from "../../../Media/Media";

// video Plaer
import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'

import { Link } from "react-router-dom";

//css
import './Main.css'
import CarouselIA from "./CarouselIA";

function Main(){
    const{
        videoHome,
    } = videos

    const{
        SeloIA
    } = images

    return(
        <>
    
          <div className="container-fluid  mt-2" id="future">
            <p className="future text-center ">O futuro é agora</p>
            
       
            <div className="collapse navbar-collapse" id="navbarsExample02">
             
            </div>
          </div>
       <div className="general">

      <div className="container col-xxl-8 px-2 py-1 ">
    <div className="row  align-items-center  py-5">
      <div class="col-lg-5 text-lg-start text-sm-center" id="main-hiperquimica">
        <h1 class="display-4 fw-bold lh-1 "></h1>
        <img className="pb-4 seloIa  pl-2" src={SeloIA} style={{ width: '60%', height: '60%' }}/>
        <p class="col-lg-10 text-light  text-start text-ia-hiper">A HIPERQUIMICA está utilizando sua expertise em IAs para criar storytelling realista de impacto, transformando ideias em narrativas poderosas</p>
       

        <Link to='/conteudo-IA' href="" className="hiperq-link text-start">Clique aqui  &nbsp;
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>

        </Link>
      
      </div>
      <div className="col-12 col-sm-8 col-lg-7 pt-5">
      <div className="embed-responsive embed-responsive-16by9 ">
    
        
      <div className='vid'>
      
            <div className='video-container'>
              <Video playsInline
              
              >
                <source src={videoHome} type='video/webm' />
              </Video>

            </div>
          </div>
       
    </div>
   
        
      </div>
    </div>
      </div>
      <div className="container com-videos">
  <div className="row pb-6 ">
  <CarouselIA className="" videos={videosIa}/>
  </div>
</div>
  </div>
        
        </>
    )

}

export default Main;