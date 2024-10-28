import Headers from "../components/header/header/Headers";
import Footer from "../components/header/footer/Footer";
import Guilherme from "../components/sobre/Gui";
import Mauro from "../components/sobre/Mauro";

function QuemSomos(){
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