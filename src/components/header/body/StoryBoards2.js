//Stylesheet
import "./Story2.css"



//media
import { images } from '../../../Media/Media'
import CarrosselImg from "./CarrosselImg"

function StoryBoards2(){

  const{
    Story12,
    Story13,
    Story14,
  } = images

    return (

        <>
      <div id="Storyboard">

      <div class="container pt-4" >
            <div class="row">
              <div className="col-lg-5 col-sm-12 ">
 
                <h1 class="display-4 fw-bold lh-1 text-light heading-story2 pt-sm-0 pt-lg-5 " >Storyboards</h1>
                <p class="lead text-light text-hiper-story2">Gui Fonseca, criativo do estúdio HIPERQUIMICA, sabe que entre um milhão de planos, apenas um realmente serve para cada cena dos filmes. Ele é responsável pela decupagem de cenas inesquecíveis em séries de sucesso como DNA do Crime (Netflix), O Jogo que Mudou a História(GloboPlay)  e Americana(Star+), além de muitos longas e comerciais de TV que se tornaram verdadeiros blockbusters.</p>
                <p class="lead text-light text-hiper-story2">A HIPERQUIMICA conta com um time de talentos e uma rede de colaboradores que encaram qualquer desafio. A HIPERQUIMICA tem competência para responder a esses desafios sem transferir a sua responsabilidade para o time, está preparada para encarar um job de baixo custo ou com prazos apertados, tudo isso sem abrir mão da qualidade e excelência.</p>
                

              </div>
              <div class="col-lg-7 col-sm-12 pt-sm-0 pt-lg-5 ">
                <div className="bg-light mb-4">

                <CarrosselImg className="pt-4"/>
                </div>
              
              </div>
            </div>
      </div>
      
         
        
        
      </div>
        </>
    )
}

export default StoryBoards2