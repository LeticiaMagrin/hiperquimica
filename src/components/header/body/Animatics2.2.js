

// video Plaer
import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'



import {  videos3, videos } from "../../../Media/Media"
import VidAnimatics1 from "./VidAnimatics1"


import 'react-html5video/dist/styles.css'

//css 
import './BlocoAnimatics.css'

function Animatics22(){
    const{
        Beats,
    } = videos



    return(
        <>
    
        
       <div className="general">

      <div className="container col-xxl-8 px-2 py-1 ">
    <div className="row  align-items-center  py-5">
      <div class="col-lg-5 " id="main-hiperquimica-sec">
      <h1 class="display-4 fw-bold lh-1 text-light mb-3 animatics-title text-lg-start text-sm-center"> 2D ANIMATICS</h1>
      <p className="col-lg-10  text-light text-start  " id='animatics-texto-hq'>A HIPERQUIMICA é conhecida no mercado principalmente pela capacidade de contar histórias em imagens. Nossa expertise sempre foi entender os mecanismos que fazem um roteiro funcionar. É aí que entram nossos craques em imagem e storytelling para escolher, montar e até mesmo suprimir imagens, fazendo com que cada cena dos storyboards e animatics atue para que o filme seja montado em sua potencialidade máxima.</p>

       
      </div>
      <div className="col-12 col-sm-8 col-lg-7 vid-pagina ">
      <div className="embed-responsive embed-responsive-16by9 ">
    
        
      <div className='vid  '>
      
            <div className='video-container'>
              <Video className='pt-4'
              
              >
                <source src={ Beats }  type='video/webm'/>
              </Video>

            </div>
          </div>
       
    </div>
   
        
      </div>
    </div>
      </div>
      <div className="container com-videos">
  <div className="row pb-6 ">
  <VidAnimatics1 className="" videos={videos3}/>
  </div>
</div>
  </div>
        
        </>
    )

}

export default Animatics22;