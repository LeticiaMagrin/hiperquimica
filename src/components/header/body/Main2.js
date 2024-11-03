import { videos, videosIa }  from "../../../Media/Media";
import { images } from "../../../Media/Media";

// video Plaer
import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'


//css
import './Main.css'
import CarouselIA2 from "./CaroulselIA2";

function Main2(){
    const{
        Ipiranga,
    } = videos

    const{
        SeloIA
    } = images

    return(
        <>
    
        
       <div className="general">

      <div className="container col-xxl-8 px-2 py-1 ">
    <div className="row  align-items-center  py-5">
      <div class="col-lg-5 text-lg-start text-sm-center" id="main-hiperquimica">
        <h1 class="display-4 fw-bold lh-1 "></h1>
        <img className="pb-4 seloIa  pl-2" src={SeloIA} style={{ width: '60%', height: '60%' }}/>
        <p class="col-lg-10 text-light  text-start text-ia-hiper pt-4">A HIPERQUIMICA combina expertise em inteligência artificial com criatividade para produzir vídeos e animações que se destacam nas redes. Utilizando tecnologia de ponta e um arsenal de talentos, criamos conteúdos dinâmicos e realistas que capturam a atenção do público e impulsionam o engajamento. Seja para campanhas publicitárias, vídeos institucionais ou animações envolventes, a HIPERQUIMICA transforma sua visão em realidade com alta qualidade e impacto. Descubra como nossas soluções podem levar sua comunicação ao próximo nível. </p>
       

       
      </div>
      <div className="col-12 col-sm-8 col-lg-7 vid-pagina ">
      <div className="embed-responsive embed-responsive-16by9 ">
    
        
      <div className='vid  '>
      
            <div className='video-container'>
              <Video className='pt-4'
              
              >
                <source src={Ipiranga} type='video/webm'/>
              </Video>

            </div>
          </div>
       
    </div>
   
        
      </div>
    </div>
      </div>
      <div className="container com-videos">
  <div className="row pb-6 ">
  <CarouselIA2 className="" videos={videosIa}/>
  </div>
</div>
  </div>
        
        </>
    )

}

export default Main2;