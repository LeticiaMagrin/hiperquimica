//Stylesheet
import "./Story2.css"



//media
import { images } from '../../../Media/Media'
import CarrosselImg from "./CarrosselImg"

function StoryBoards2(){

  const{
    Story15,
    Story16,
    Story17,
    Story18,
  } = images

    return (

        <>
      <div  id="Storyboard">

      <div className="container py-5" >
            <div className="row">
              <div className="col-lg-5 col-sm-12 text-start">
 
                <h1 className="display-4 fw-bold lh-1 text-light heading-story2 pt-sm-0 pt-lg-5 " >Storyboards</h1>
                <p className="lead text-light text-hiper-story2">Gui Fonseca, criativo do estúdio HIPERQUIMICA, sabe que entre um milhão de planos, apenas um realmente serve para cada cena dos filmes. Ele é responsável pela decupagem de cenas inesquecíveis em séries de sucesso como DNA do Crime (Netflix), O Jogo que Mudou a História(GloboPlay)  e Americana(Star+), além de muitos longas e comerciais de TV que se tornaram verdadeiros blockbusters.</p>
                <p className="lead text-light text-hiper-story2">A HIPERQUIMICA conta com um time de talentos e uma rede de colaboradores que encaram qualquer desafio. A HIPERQUIMICA tem competência para responder a esses desafios sem transferir a sua responsabilidade para o time, está preparada para encarar um job de baixo custo ou com prazos apertados, tudo isso sem abrir mão da qualidade e excelência.</p>
                

              </div>
              <div className="col-lg-7 col-sm-12 pt-sm-0 pt-lg-5 pt-2">
                {/* <div className="bg-dark mb-4">

                <CarrosselImg className="pt-4"/>
                </div> */}
              <div id="carouselExampleIndicators" className="carousel slide  Storyboard2-cont" data-bs-ride="carousel ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Story18} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Story16} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Story17} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
              </div>
            </div>
      </div>
      
         
        
        
      </div>
        </>
    )
}

export default StoryBoards2