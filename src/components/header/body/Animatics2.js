import {  videos3, videos4 } from "../../../Media/Media"
import VidAnimatics1 from "./VidAnimatics1"
import VidAnimatics2 from "./VidAnimatics2"


//video Player

import 'react-html5video/dist/styles.css'

//css 
import './BlocoAnimatics.css'

function Animatics2(){


    return(
        <>
        
    <div className="bg-dark">

    <div class="container col-xl-10 col-xxl-8  py-2">
    <div class="row align-items-center g-lg-12 py-5">
      <div class="col-lg-12 text-center text-lg-start" id="hiperquimica-animatics">
        <h2 class="display-4 fw-bold lh-1 text-light mb-3"> 2D Animatics</h2>
        <p class="col-lg-10 fs-4 text-light animatics-texto-hiper">A HIPERQUIMICA é conhecida no mercado principalmente pela capacidade de contar histórias em imagens. Nossa expertise sempre foi entender os mecanismos que fazem um roteiro funcionar. É aí que entram nossos craques em imagem e storytelling para escolher, montar e até mesmo suprimir imagens, fazendo com que cada cena dos storyboards e animatics atue para que o filme seja montado em sua potencialidade máxima.</p>
        <p class="col-lg-10 fs-4 text-light animatics-texto-hiper">Com nossas soluções em animatics, ajudamos grandes marcas a visualizar e ajustar suas campanhas antes da produção final, economizando tempo e recursos enquanto garantimos um produto final alinhado com o público-alvo. A HIPERQUIMICA tem atuado para elevar o padrão da produção audio-visual, entregando historias memoráveis.
          
        </p>
      </div>

      </div>
      <div class="row align-items-center g-lg-12 py-2">

      <div className="col-12 col-sm-8 col-lg-6 ">
      <div className="embed-responsive embed-responsive-16by9 ">
      <div className='vid'>
      
      <div className='video-container pt-4'>
     
    </div>
  
        </div> 
      </div>
      
        
      </div>
      <VidAnimatics1 videos={videos3}/>
    </div>
    <div class="row align-items-center g-lg-12 py-2">

<div className="col-12 col-sm-8 col-lg-6 ">
<div className="embed-responsive embed-responsive-16by9 ">
<div className='vid'>

<div className='video-container pt-3'>

</div>

  </div> 
</div>

  
</div>
<VidAnimatics2 videos={videos4}/>
</div>
  </div>
    </div>
        </>
    )
}

export default Animatics2