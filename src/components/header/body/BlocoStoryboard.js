//Stylesheet
import "./BlocoStoryboard.css"

import { Link } from "react-router-dom"

//media
import { images } from '../../../Media/Media'

function BlocoStoryboard(){

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
              <div className="col-lg-5 col-sm-12 text-start pb-4">
 
                <h1 class="  text-light pt-sm-0 pt-lg-5 " >STORYBOARD</h1>
                <p class=" text-light text-hiper-story">Storyboards que unem arte tradicional com narrativa visual. Cada quadro é uma obra cuidadosamente desenhada, dando forma aos roteiros</p>
                

                <Link to='/storyboards' className="text-light text-hiper-story">Clique aqui &nbsp;
                
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>

                </Link> 
              </div>
              <div className="col-lg-7 col-sm-12  ">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Story12} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Story13} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Story14} class="d-block w-100" alt="..."/>
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
      </div>
      
         
        
        
      </div>
        </>
    )
}

export default BlocoStoryboard