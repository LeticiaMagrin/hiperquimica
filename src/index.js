import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import Home from './pages/home';
import Contact from './pages/contact';
import OqueFazemos from './pages/OqueFazemos';
import QuemSomos from './pages/quemSomos';
import Animatics from './pages/Animatics';
import Conteudo from './pages/Conteudo';
import PaginaIA from './pages/PaginaIa';
import PaginaStoryBoards from './pages/PaginaStoryBoads';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"contato",
        element: <Contact/>
      },
      {
        path:"sobre",
        element: <QuemSomos/>
      },
      {
        path:"o-que-fazemos",
        element: <OqueFazemos/>
      },
      {
        path:"animatics",
        element: <Animatics/>
      },
      {
        path:"conteudo",
        element: <Conteudo/>
      },
      {
        path:"conteudo-IA",
        element: <PaginaIA/>
      },
      {
        path:"storyboards",
        element: <PaginaStoryBoards/>
      }


    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
