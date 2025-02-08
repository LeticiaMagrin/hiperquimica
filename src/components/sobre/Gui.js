import { hiperquimmicaEquipe } from "../../Media/Media";
import '../../pages/QuemSomos.css'

function Guilherme(){

  const{
    Guilherme
  } = hiperquimmicaEquipe;

    return(
        
        <div class="card mb-3 mx-lg-5 mx-auto py-3 mt-2" >
        <div class="row no-gutters">
        
              <h5 class="card-title pt-3 text-center ">Gui Fonseca</h5>
          <div className="col-lg-4 col-11 mt-3 mt-lg-5 px-5 pg-lg-0">
              <img className='rounded' width="300" height="370" src={Guilherme}/>
          </div>
            
          <div class="col-lg-8 col-sm-12  text-center">
          
          
            
          
                <div class="card-body text-lg-start text-center">
                <p class="lead mb-4 text-quem-somos">Guilherme Fonseca é um contador de histórias versátil, cuja expertise abrange múltiplas formas de narrativa, incluindo filmes, animações, quadrinhos e webséries. Pós-graduado em Roteiro para Cinema e Televisão pela FAAP e com um MBA em Inteligência Artificial, Guilherme também é formado em Letras, ele combina palavras e imagens com maestria. Com três décadas de experiência na criação de animações e histórias para o público jovem, Guilherme é especialista em storyboards, tendo trabalhado em séries de streaming como “DNA DO CRIME” (Netflix), “O JOGO QUE MUDOU A HISTÓRIA” (Globoplay)  e “AMERICANA” (Star+). No cinema, produziu storyboards para cinco longas-metragens.</p>
                <p class="lead mb-4 text-quem-somos">Entre suas premiações estão o PROAC de 2017 com a adaptação de "O CRIME DO RESTAURANTE CHINÊS" e o PROAC de 2008 com "ESTAÇÃO LUZ". Ele também é autor de “AUTOMATIC LOVER” (2012), explorando a dualidade entre máquinas e sentimentos.</p>
                <p class="lead mb-4 text-quem-somos">Sua trajetória reflete um compromisso com a inovação e a versatilidade, transformando cada projeto em uma nova oportunidade de cruzar fronteiras criativas e conectar diferentes formas de arte em narrativas únicas.</p>
                </div>
                <a class="lead mb-4 text-quem-somos text-center" href="https://www.guifonseca333.com">www.guifonseca333.com</a>
            <div class="card-body">
              <div class="col-10 ">
    
              </div>
           
            </div>
          </div>

        </div>
      </div>
        
    )
}

export default Guilherme;