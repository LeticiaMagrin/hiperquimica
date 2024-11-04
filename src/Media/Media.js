//imports
import videoHome1 from "../assets/Video/video1.1.mp4"
import videoHome from "../assets/Video/video1.mp4"
import ArtePremium_Lysol from "../assets/Video/08_ANIMATIC_02.mp4"
import Ipiranga_30_Versao02_18hs from "../assets/Video/09_ANIMATIC_03.mp4"
import Batavo_PenseZero_Animatic from "../assets/Video/10_ANIMATIC_08_ClubSocial_1.mp4"
import Claro_Narramatic_Linha2_Ref2 from "../assets/Video/03-Probio2_Amigas.mp4"
import marca1 from "../assets/Img/marca1.1.png"
import marca2 from "../assets/Img/marca2.png"
import SeloIA from "../assets/Img/SeloIA.png"
import Story12 from "../assets/Img/story12.jpg"
import Story13 from "../assets/Img/story13.jpg"
import Story14 from "../assets/Img/story14.jpg"
import DPZ from "../assets/Img/dpz.jpeg"
import BBDO from "../assets/Img/BBDO.jpeg"
import Draftline from "../assets/Img/draftline.jpeg"
import FCB from "../assets/Img/fcbbrasil.jpeg"
import HAVAS from "../assets/Img/havas.jpeg"
import JWT from "../assets/Img/jwt.jpeg"
import DM9 from "../assets/Img/DM9.jpeg"
import Publicis from "../assets/Img/publics.jpeg"
import Paranoid from "../assets/Img/paranoid.jpeg"
import TBWA from "../assets/Img/tbwa.jpeg"
import YER from "../assets/Img/y&r.jpeg"
import Talent from "../assets/Img/Talent.jpeg"
import McCann from "../assets/Img/mccan.jpeg"

//videosIA

import videoia1 from '../assets/Video/mushroom_cloud.mp4'
import videoia2 from '../assets/Video/end_of_the_day.mp4'
import videoia3 from '../assets/Video/rotate.mp4'
import videoia4 from '../assets/Video/05-VW_AMAROK.mp4'
import videoia5 from '../assets/Video/06-DM9_Ifood.mp4'
import videoia6 from '../assets/Video/07-Narramatic_03_Avon_.mp4'
import Ipiranga from '../assets/Video/04-POSTOS_IPRIRANGA.mp4'
//img ia

import Farm from "../assets/Img/farm_men.png"

//Equipe

import Guilherme from "../assets/Img/Guilherme.jpeg"
import Mauro from "../assets/Img/Mauro.jpeg"
import Marina from "../assets/Img/Marina.jpeg"
import Val from "../assets/Img/Val.jpeg"
import Clara from "../assets/Img/Clara.jpeg"
import Matheus from "../assets/Img/Matheus.jpeg"


// animatics

import Coppertone from "../assets/Video/COPPERTONE_2017_Baixa.mp4"
// import Cheetos from "../assets/Video/Cheetos_ING_19Agosto.mp4"
import Jogo from "../assets/Video/JOGO_13.mp4"
import Mae from "../assets/Video/MAE_21.mp4"
import Burro from "../assets/Video/BurroV11_15_07_Fcb_v2_ok.mp4"
import Beats from "../assets/Video/BeatsV05.mp4"

//storyboards

import Story10 from "../assets/Img/story10.jpg";
import Story15 from "../assets/Img/story15.jpg";
import Story16 from "../assets/Img/story16.jpg";
import Story17 from "../assets/Img/story17.jpg";
import Story18 from "../assets/Img/story18.jpg";



const Media = () => {


}



//videos
export const videos = {
  videoHome: videoHome,
  videoHome1: videoHome1,
  Ipiranga: Ipiranga,
  ArtePremium_Lysol: ArtePremium_Lysol,
    Ipiranga_30_Versao02_18hs: Ipiranga_30_Versao02_18hs,
    Batavo_PenseZero_Animatic: Batavo_PenseZero_Animatic,
    Claro_Narramatic_Linha2_Ref2: Claro_Narramatic_Linha2_Ref2,
    Mushroom_Cloud: videoia1,
    End_day: videoia2,
    Rotate: videoia3,
    Car_Speed: videoia4,
    Close_Legs: videoia5,
    Garota:   videoia6,
    Beats: Beats

}

export const videos1 =[
    {
    
        id: 1,
        videoName: videoHome,
      },
        {
    
        id: 2,
        videoName: videoHome,
      },
        {
    
        id: 3,
        videoName: videoHome,
      },
]


export const videos2 = [
    
        {
    
        id: 1,
        videoName: ArtePremium_Lysol,
      },
        {
    
        id: 2,
        videoName: Ipiranga_30_Versao02_18hs,
      },
        {
    
        id: 3,
        videoName: Batavo_PenseZero_Animatic,
      },
        {
    
        id: 4,
        videoName: Claro_Narramatic_Linha2_Ref2,
      },
     
      ] 

      export function filteredVideosIa(videos2){
        return videos2.slice(0 ,-1);
    }
export const videos3 = [
    
        {
    
        id: 1,
        videoName: Coppertone,
      },
        {
    
        id: 2,
        videoName: Mae,
      },
        {
    
        id: 3,
        videoName: Jogo,
      },
        {
    
        id: 4,
        videoName: Mae,
      },
     
      ] 

      export function filteredVideos3(videos3){
        return videos3.slice(0 ,-1);
    }
export const videos4 = [
    
        {
    
        id: 1,
        videoName: Mae,
      },
        {
    
        id: 2,
        videoName: Burro,
      },
       
        {
    
        id: 3,
        videoName: Claro_Narramatic_Linha2_Ref2,
      },
     
      ] 

      export function filteredVideos4(videos4){
        return videos4.slice(0 ,-1);
    }
export const videosIa = [
    
      {
  
      id: 1,
      videoName: videoia1,
    },
      {
  
      id: 2,
      videoName: videoia2,
    },
      {
  
      id: 3,
      videoName: videoia3,
    },
      {
  
      id: 4,
      videoName: videoia4,
    },

   
    ] 

    export function filteredVideos(videosIa){
      return videosIa.slice(0 ,-1);
  }
  
  export const videosIa2 = [
  
    {

    id: 1,
    videoName: videoia4,
  },
    {

    id: 2,
    videoName: videoia5,
  },
    {

    id: 3,
    videoName: videoia6,
  },
  
    {

    id: 4,
    videoName: videoia6,
  },
  
 
  ] 

  export function filteredVideosIa2(videosIa2){
    return videosIa2.slice(0 ,-1);
}



export const imgIa = {
   Farm : Farm
}

//imagens
export const images = {
    marca1 : marca1,
    marca2 : marca2,
    SeloIA : SeloIA,
    Story12: Story12,
    Story13: Story13,
    Story14: Story14,
    Story10: Story10,
    Story15: Story15,
    Story16: Story16,
    Story17: Story17,
    Story18: Story18,
    DPZ: DPZ,
    BBDO: BBDO,
    Draftline: Draftline,
    FCB: FCB,
    HAVAS: HAVAS,
    JWT: JWT,
    DM9: DM9,
    Publicis: Publicis,
    Paranoid: Paranoid,
    TBWA: TBWA,
    YER: YER,
    McCann: McCann,
    Talent: Talent,

}

export const hiperquimmicaEquipe = {
  Guilherme : Guilherme,
  Mauro : Mauro,
  Marina: Marina,
  Val: Val,
  Clara: Clara,
  Matheus: Matheus,
}

export default Media