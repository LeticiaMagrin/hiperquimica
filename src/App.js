//Components
// import Headers from './components/header/header/Headers';
// import BlocoVideo from './components/header/body/BlocoVideo';
// import Main from './components/header/body/Main';
// import BlocoAnimatics from './components/header/body/BlocoAnimatics';
// import BlocoStoryboard from './components/header/body/BlocoStoryboard';
// import Footer from './components/header/footer/Footer';


import { Outlet } from 'react-router-dom';
//Stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
    

      {/* <Headers className="pt-2 " />
      <BlocoVideo/> */}
      {/* <Main/>
      <BlocoAnimatics/>
      <BlocoStoryboard/>  */}
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
