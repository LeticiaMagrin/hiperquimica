//Stylesheet
import "./Story2.css"

//media
import { arts } from '../../../Media/Media'


function Ilustra2(){

  const{
   arta,
   artb,
   art2,
   art3,
   art5,
   art6,
   art8,
  } = arts

    return (

        <>
      <div  id="Storyboard">

      <div className="container py-5" >
            <div className="row">
              <div className="col-lg-5 col-sm-12 text-start">
 
                <h1 className="display-4 fw-bold lh-1 text-light heading-story2 pt-sm-0 pt-lg-5 " >ANIMAÇÕES E ILUSTRAÇÕES </h1>
                <p className="lead text-light text-hiper-story2">As ilustrações da HIPERQUIMICA são criadas com uma combinação de criatividade e técnica refinada, abrangendo desde fine art e desenho à mão livre até pintura digital. Cada JOB recebe um toque pessoal e único, capturando a essência do projeto, criando ilustrações que impactam e inspiram.</p>
                <p className="lead text-light text-hiper-story2">Além disso, nosso talento e expertise se estendem ao mundo das animações, tanto em 2D quanto em 3D. Utilizamos softwares profissionais de última geração para criar animações que trazem qualquer conceito à vida, seja em campanhas publicitárias, vídeos explicativos ou conteúdo de entretenimento. Com uma atenção rigorosa aos detalhes e uma abordagem criativa estratégica, a HIPERQUIMICA entrega projetos que não apenas superam expectativas, mas posicionam sua marca para enfrentar os desafios futuros e aproveitar as novas oportunidades com excelência.</p>
                

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
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={arta} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={artb} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={art2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={art3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={art5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={art6} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={art8} className="d-block w-100" alt="..."/>
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

export default Ilustra2