import { images } from "../../../Media/Media"

import './Clientes.css'

function Clientes(){

    const{
        DPZ,
        BBDO,
        Draftline,
        FCB,
        HAVAS,
        JWT,
        DM9,
        Publicis,
        Paranoid,
        TBWA,
        YER,
        McCann,
        Talent,
    } = images

    return(
        <>
         <div className="container-fluid  my-2 mt-4" id="future">
              <p className="future text-center ">Nossos Clientes</p>
            
       
              <div className="collapse navbar-collapse" id="navbarsExample02">
             
              </div>
          </div>
          <div className='principal'>
  <div class="container  pt-2">
    
        <div class="row mx-5">
        <div class="col-12 col-lg-4 ">
            
        <img alt="client" className="client" src={DPZ}/>
        
        </div>
        <div class="col-12 col-lg-4 ">
        <img alt="client" className="client" src={BBDO}/>
           
        </div>
        <div class="col-12 col-lg-4">
            
        <img alt="client" className="client" src={HAVAS}/>
        </div>

        </div>
        <div className="row mx-5">
        <div class="col-12 col-lg-4 ">
        <img alt="client" className="client publicis" src={Publicis}/>
        </div>
        <div class="col-12 col-lg-4 ">
        <img alt="client" className="client dm9" src={DM9}/>
            
        </div>
        <div class="col-12 col-lg-4 ">
        <img alt="client" className="client" src={TBWA}/>
            
        </div>
        
        
        
        </div>
        <div className="row mx-5 py-2">
        <div class="col-12 col-lg-4">
        <img alt="client" className="client" src={McCann}/>
        </div>
        <div class="col-12 col-lg-4">
        
        <img alt="client" className="client jwt pb-2" src={JWT}/>   
        </div>
        <div class="col-12 col-lg-4 ">
           
        <img alt="client" className="client" src={FCB}/>  
        </div>
      
        
        <div className="row mx-0">
            <div className="col-12 col-lg-4">
            
            <img alt="client" className="client" src={Draftline}/>
           
            </div>
            <div class="col-12 col-lg-4 pt-2">
            <img alt="client" className="client yer" src={YER}/>
            </div>
            <div class="col-12 col-lg-4 ">
            <img alt="client" className="client" src={Talent}/>
            </div>
            </div>
            <div className="row-mx-5">
                <div class="col-12 col-lg-12 pl-2">
                    <img alt="client" className="client" src={Paranoid}/>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Clientes;