import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import * as C from './SobreStyled';
import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from '../Footer/Footer';
import {Services} from "./SobreStyled"
import amico from "../../assets/amico.png"
import pana from "../../assets/pana.png"
import employes from "../../assets/employes.png"
import SlideImg from '../Slide/SlideImg';


function Home() {
  return (
    <C.Container>
      <SlideImg/>
      <Services>
                <h1>Serviços de Entrega</h1>
                <div className="columns">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quidem, voluptatem natus quae dolorum quibusdam aliquam
                         cum repellat consequuntur rerum suscipit eaque aperiam maiores doloribus, 
                         autem doloremque amet minus error perspiciatis.</p>
                 
                    <img src={amico} alt="foto" />
                </div>
            </Services>

            <Services>
                <h1>Quem Somos</h1>
                <div className="columns">
                <img src={pana} alt="foto" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quidem, voluptatem natus quae dolorum quibusdam aliquam
                         cum repellat consequuntur rerum suscipit eaque aperiam maiores doloribus, 
                         autem doloremque amet minus error perspiciatis.</p>
                </div>
            </Services>

            
            <Services>
                <h1>Seja Sócio</h1>
                <div className="columns">
                <img src={employes} alt="foto" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quidem, voluptatem natus quae dolorum quibusdam aliquam
                         cum repellat consequuntur rerum suscipit eaque aperiam maiores doloribus, 
                         autem doloremque amet minus error perspiciatis.</p>
                </div>
            </Services>
           

     <Footer/>
       
    </C.Container>
  
  );
}

export default Home;

