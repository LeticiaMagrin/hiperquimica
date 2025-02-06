import { hiperquimmicaEquipe } from "../../Media/Media";
import '../../pages/QuemSomos.css'

function Mauro(){

  const{
    Mauro
  } = hiperquimmicaEquipe;

    return(
        
        <div class="card mb-3 mx-lg-5 mx-auto py-3 mt-2" >
        <div class="row no-gutters">
        
              <h5 class="card-title pt-3 text-center ">Mauro Salgado</h5>
          <div className="col-lg-4 col-11 mt-3 mt-lg-5 px-5 pg-lg-0">
              <img className='rounded' width="300" height="370" src={Mauro}/>
          </div>
            
          <div class="col-lg-8 col-sm-12  text-center">
          
          
            
          
                <div class="card-body text-lg-start text-center">
                <p class="lead mb-4 text-quem-somos">Mauro Salgado é um ilustrador, colorista e roteirista com vasta experiência no setor, tendo colaborado com estúdios e agências publicitárias ao longo de 15 anos de carreira. Formado em Desenho e Ilustração Publicitária pela Quanta Academia de Artes e em Animação Clássica pela Art Academia, atualmente está cursando Design de Animação no Senac, sempre buscando expandir seus conhecimentos e habilidades.</p>
                <p class="lead mb-4 text-quem-somos">Sua trajetória inclui participações em projetos de destaque, como o premiado "Estação Luz, participou como autor na coletânea "Automatic Lover" (2012), publicada pela Devir, e no quadrinho "O Crime do Restaurante Chinês", lançado pela Hiperquímica em 2018.</p>
                <p class="lead mb-4 text-quem-somos">Em 2018, Mauro Salgado lançou de forma independente a trilogia Rumble Bots, uma obra que explora o combate de robôs, destacando-se pela inovação e dinamismo. Em 2021, criou o canal Contosfera no YouTube, voltado para animações para o público jovem e adulto, e, no ano seguinte, o canal Nimosoficial, dedicado a animações infantis. Além disso, há seis anos, ele compartilha seu conhecimento como professor de Arte Digital na Quanta Academia de Artes.</p>
                <p class="lead mb-4 text-quem-somos">Mauro Salgado é um criador multidisciplinar, movido pela paixão em dar vida a projetos que conectam diferentes formas de arte, sempre com um olhar inovador e uma técnica apurada que cativa e inspira.</p>
                </div>
                <p class="lead mb-4 text-quem-somos text-center">maurosalgado.com</p>
            <div class="card-body">
              <div class="col-10 ">
    
              </div>
           
            </div>
          </div>

        </div>
      </div>
        
    )
}

export default Mauro;