//Stylesheet
import "./BlocoIlustra.css"

import { Link } from "react-router-dom"

//media
import { images } from '../../../Media/Media'

function BlocoIlustra(){

  const{
    Story12,
    Story13,
    Story14,
  } = images

    return (

        <>
      <div id="Storyboard">

      <div class="container pt-4 pb-5" >
            <div class="row">
              <div className="col-lg-4 col-sm-12 pt-4">
 
                <h1 class="display-4 fw-bold lh-1 text-light titulo-anima" >ANIMAÇÕES <br/>E ILUSTRAÇÕES</h1>
                <p class="lead text-light titulo-ilustra">Fine art, desenho à mão livre e pintura digital: criatividade e técnica refinada para trabalhos que exigem um toque pessoal e único.</p>

                <Link to='/conteudo' className="text-light link-ilustra"><a className="text-light">Clique aqui &nbsp; <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg></a> </Link>
                
              </div>
              <div class="col-lg-4 col-sm-12 ">
                {/* <img className="Storyboard" id="first" src={ Story12 }/> */}
              </div>

              <div class="col-lg-4 col-sm-12">
                {/* <img className="Storyboard" src={ Story13 }/> */}
               
              </div>
              <div className="row justify-content-end">
              <div class="col-lg-8 col-sm-12 ">
                {/* <img className="last" src={ Story14 }/> */}
              </div>
              
              </div>
            </div>
      </div>
      
         
        
        
      </div>
        </>
    )
}

export default BlocoIlustra