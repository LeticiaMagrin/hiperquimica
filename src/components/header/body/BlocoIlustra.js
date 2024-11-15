//Stylesheet
import "./BlocoIlustra.css"

import { Link } from "react-router-dom"

//media
import { arts } from '../../../Media/Media'

function BlocoIlustra(){

  const{
    arta,
    artb,
    art1,
    art2,
    art3,
    art4,
    art5,
    art6,
    art7,
    art8,
  } = arts

    return (

        <>
      <div className="bg-dark" >
        


<div className="container pt-4" >
      <div className="row">
        <div className="col-lg-5 col-sm-12 text-start pb-4">

          <h2 className="  text-light pt-sm-0 pt-lg-5 heading-story " >ANIMAÇÕES E ILUSTRAÇÕES</h2>
          <p className=" text-light text-hiper-story">Fine art, desenho à mão livre e pintura digital: criatividade e técnica refinada para trabalhos que exigem um toque pessoal e único.</p>
          

          <Link to='/conteudo' className="text-light text-hiper-story">Clique aqui &nbsp;
          
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>

          </Link> 
        </div>
        <div className="col-lg-7 col-sm-12  my-4">
           
           <img className="image-ilustra" id="imagens-storyboard" src={arta}/>



          {/* Carrossel mobile */}<div id="carrossel">

          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
<img src={artb} class="d-block w-100" alt="..."/>
</div>
<div class="carousel-item">
<img src={art1} class="d-block w-100" alt="..."/>
</div>
<div class="carousel-item">
<img src={art2} class="d-block w-100" alt="..."/>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
          </div>
</div>

      </div>
      <div className="row pb-4">

    
      <div className=" col-md-4">
      

        <img className="" id="imagens-storyboard" style={{width: '100%'}} source src={artb} />
      </div>

      <div className="col-md-4">
        <img id="imagens-storyboard" style={{width: '100%'}} source src={art1} />
      </div>
      <div className="col-md-4">
        <img id="imagens-storyboard" style={{width: '100%'}} source src={art2} />
        
      </div>
    </div>
</div>
      </div>
      </div>

           


      {/* <div class="container pt-4 pb-5 text-start" >
            <div class="row">
              <div className="col-lg-4 col-sm-12 pt-4">
 
                <h1 class="display-4 fw-bold lh-1 text-light titulo-anima" >ANIMAÇÕES E ILUSTRAÇÕES</h1>
                <p class="lead text-light titulo-ilustra">Fine art, desenho à mão livre e pintura digital: criatividade e técnica refinada para trabalhos que exigem um toque pessoal e único.</p>

                <Link to='/conteudo' className="text-light link-ilustra"><a className="text-light">Clique aqui &nbsp; <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg></a> </Link>
                
              </div>
             

            
            </div>
            <div className=" col-md-4 ">
            
 
            <img className="" id="imagens-storyboard" style={{width: '100%'}} source src={Story13} />
          </div>

          <div className="col-md-4">
            <img id="imagens-storyboard" style={{width: '100%'}} source src={Story13} />
          </div>
          <div className="col-md-4">
            <img id="imagens-storyboard" style={{width: '100%'}} source src={Story13} />
            
          </div>
        </div> */}
      
         
        
        
      
        </>
    )
}

export default BlocoIlustra