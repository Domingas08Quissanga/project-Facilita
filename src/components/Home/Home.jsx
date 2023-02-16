import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import * as C from './HomeStyled';
import { BsChevronLeft , BsChevronRight} from "react-icons/bs";
import  SlideImg  from '../Slide/SlideImg'
import 'bootstrap/dist/css/bootstrap.css';
import {ImagesMock} from '../mock/images.jsx'
import {ImageCards} from '../Cards/Cards.jsx'
import { Footer } from '../Footer/Footer'
import { PriceFormat } from '../../utils/numberFormat';


function Home() {
  
  return (
    
    <C.Container>
      <SlideImg/>
      <C.cardInner>
        <button>
          <BsChevronLeft/>
            </button>
          <C.cardItem>
          {
            ImagesMock.map(({imageSrc,description},key)=>
              <C.cardCarousel key={key}>
                <img src={imageSrc} alt="fruta" />
                <p>{description}</p>
              </C.cardCarousel>
            )
          }
      </C.cardItem>
            <button>
              <BsChevronRight/>
            </button>
          </C.cardInner>
      <C.cardInner>
          <C.cardItem>
           {
            ImageCards.map(({image,desc,price},key)=>
              <C.cardCarousel key={key}>
                <img  src={image} alt="fruta" className='cards' />
                <hr className='solid'/>
                <div className='content'>
                <p>{desc}</p>
                <p>{PriceFormat(price)}</p>
                </div>
                <button className='addShop'>+ Adicionar ao Carrinho</button>
              </C.cardCarousel>
            )
            
          }
          </C.cardItem>
      </C.cardInner>
        <Footer/>
    </C.Container>
 
  );
}

export default Home;
