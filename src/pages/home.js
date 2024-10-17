//Components
import Headers from '../components/header/header/Headers';
import BlocoVideo from '../components/header/body/BlocoVideo';
import Main from '../components/header/body/Main';
import BlocoAnimatics from '../components/header/body/BlocoAnimatics';
import BlocoStoryboard from '../components/header/body/BlocoStoryboard';
import BlocoVideos from '../components/header/body/BlocoVideos';
// import BlocoIlustra from '../components/header/body/BlocoIlustra';
import Sobre from '../components/header/body/Sobre';
import Clientes from '../components/header/body/Clientes';
import Equipe from '../components/header/body/Equipe';
import Footer from '../components/header/footer/Footer';

//Stylesheet
import '../App.css';

function Home() {
  return (
    <div className="App">
    

      <Headers className="pt-2 " />
      <BlocoVideo/>
      <Main/>
      <BlocoAnimatics/>
      <BlocoStoryboard/>
      <BlocoVideos/>
      {/* <BlocoIlustra/> */}
      <Sobre/>
      <Clientes/>
      <Equipe/>
      <Footer className="bg-dark"/>
    </div>
  );
}

export default Home;