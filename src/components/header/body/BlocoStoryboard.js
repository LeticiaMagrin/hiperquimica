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
              <div className="col-lg-4 col-sm-12 ">
 
                <h1 class="display-4 fw-bold lh-1 text-light heading-story pt-sm-0 pt-lg-5 " >Storyboard</h1>
                <p class="lead text-light text-hiper-story">Storyboards que unem arte tradicional com narrativa visual. Cada quadro é uma obra cuidadosamente desenhada, dando forma aos roteiros</p>
                

                <Link to='/storyboards' className="text-light text-hiper-story">Clique aqui &nbsp;
                
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>

                </Link> 
              </div>
              <div class="col-lg-4 col-sm-12 pt-sm-0 pt-lg-5 ">
                <img className="Storyboard" id="first" src={ Story12 }/>
              </div>

              <div class="col-lg-4 col-sm-12 pt-sm-0 pt-lg-5">
                <img className="Storyboard" src={ Story13 }/>
               
              </div>
              <div className="row justify-content-end">
              <div class="col-lg-8 col-sm-12 ">
                <img className="last" src={ Story14 }/>
              </div>
              
              </div>
            </div>
      </div>
      
         
        
        
      </div>
        </>
    )
}

export default BlocoStoryboard