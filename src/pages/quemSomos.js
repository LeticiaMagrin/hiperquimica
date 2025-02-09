import { useEffect } from 'react';
import Headers from "../components/header/header/Headers";
import Footer from "../components/header/footer/Footer";
import Guilherme from "../components/sobre/Gui";
import Mauro from "../components/sobre/Mauro";

function QuemSomos(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <>
        <Headers/>
        
        <Guilherme/>
        <Mauro/>
        <Footer/>
        </>
    )
}

export default QuemSomos;
