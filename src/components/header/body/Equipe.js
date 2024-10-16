
//stylesheet
import './Equipe.css'

//Media

import { hiperquimmicaEquipe } from '../../../Media/Media';


function Equipe(){

    const{
        Guilherme,
        Mauro,
        Marina,
        Val,
        Clara,
        Matheus
    } = hiperquimmicaEquipe

    return(
<>
          <div className="container-fluid  my-2" id="future">
              <p className="future text-center ">Nossa Equipe</p>
            
       
              <div className="collapse navbar-collapse" id="navbarsExample02">
             
              </div>
          </div>
    
<div className='mainEquipe'>
  <div className="container marketing py-5 text-start ">
    
        <div className="row mx-4">
        <div className="col-lg-4 ">
            <img className='rounded' width="320" height="370" src={Guilherme}></img>
          
            <h6 className="fw-normal pt-2 title-bold">Guilherme Fonseca</h6>
            <p className='font-medium'>MBA em IA, Roteiro e Cinema FAAP</p>
            <p className='font-extra-light'>Diretor Criativo e Generative AI Artist</p>
        
        </div>
        <div className="col-lg-4">
            <img className='rounded' width="320" height="370" src={Mauro}></img>

            <h6 className="fw-normal pt-2 title-bold">Mauro Salgado</h6>
            <p className='font-medium'>Design de Animação</p>
            <p className='font-extra-light'>Diretor Criativo e Ilustrador</p>
        
        </div>
        <div className="col-lg-4">
            <img className='rounded' width="320" height="370" src={Marina}></img>

            <h6 className="fw-normal pt-2 title-bold">Marina Marques</h6>
            <p className='font-medium'>Ilustração autoral, Bacharel em Design</p>
            <p className='font-extra-light'>Ilustradora e Visual Artist</p>
            
        </div>

        <div className="col-lg-4">
            <img className='rounded' width="320" height="370" src={Val}></img>

            <h6 className="fw-normal pt-2 title-bold">Val Junior</h6>
            <p className='font-extra-light'>Fine Art e Ilustração</p>
        
        </div>
        <div className="col-lg-4">
            <img className='rounded' width="320" height="370" src={Clara}></img>

            <h6 className="fw-normal pt-2 title-bold">Clara Pasquini</h6>
            <p className='font-extra-light'>Character Design</p>
        
        </div>
        <div className="col-lg-4">
            <img className='rounded' width="320" height="370" src={Matheus}></img>

            <h6 className="fw-normal pt-2 title-bold">Matheus Dornella</h6>
            <p className='font-extra-light'>Prompt Engineer</p>
            
        </div>
        
        </div>
    </div>
</div>




   


    
        </>
    )
}

export default Equipe;