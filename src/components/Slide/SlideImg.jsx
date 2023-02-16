import React from 'react';
import { BsSearch} from "react-icons/bs";
import * as C from '../Home/HomeStyled'
import { Slide } from 'react-slideshow-image';
// import { Container } from './styles';

function SlideImg() {
    const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1592924802543-809bfeee53fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80',
          caption: 'Slide 1'
        },
        {
          url: 'https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?auto=compress&cs=tinysrgb&w=600',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80',      caption: 'Slide 3'
        },
      ];
  return (
    <div className="slide-container">
        <Slide>
            {slideImages.map((slideImage, index)=> (
            <div key={index} >
            <div style={{ 'backgroundImage': `url(${slideImage.url})`, backgroundSize:'cover' , height:"280px"}}>
              <div className='textAndInput'>
              < C.cardTextHome>
                <h2>Seja bem-vindo ao <span>Facilita</span>  </h2>
                <p>
                    Uma plataforma de vendas e produtos agricolas nacionais.
                </p> 
                <form action="#">
                  <BsSearch />
                  <input 
                      type="search" 
                      placeholder='Busce no Facilita ...'
                      required
                  />
                </form>
             
                </C.cardTextHome>
                </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  );
}

export default SlideImg;