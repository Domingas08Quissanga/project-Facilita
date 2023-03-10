import React from 'react'
import imgUrl from '../../assets/Fundo2Fruta.jpeg'
import FrutaDesc from '../../assets/frutasBanner.png'
import * as C from '../Frutas/productsStyled'
import {Footer} from '../../components/Footer/Footer'
import { ImageCards } from '../../components/Cards/cardsFrutas'
import { PriceFormat } from '../../utils/numberFormat'
import * as A from '../../page/Home/HomeStyled'

export function Frutas() {
    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        height: '30rem',
        width:'100%' ,   
        display: 'flex',
        position: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginBottom:'90px',
    


      };
    return (
    <C.Container>
        <div style={divStyle}>
       <h2><span>Frutas fres</span>cas e nacionais</h2> 
       </div>
       <C.bannerProduct>
        <img src={FrutaDesc} alt="" />
      <div>
         <p>Elas são fontes de hidratação, além de 
          possuírem diversos minerais 
          e vitaminas que são muito importantes para o nosso organismo
        </p>
      </div>
       </C.bannerProduct>  
      <h3>Clique em adicionar ao carrinho para efetuar a compra</h3>
      <A.cardInner>
        <A.cardItem>
          {
            ImageCards.map(({ image, desc, price }, key) =>
              <A.cardCarousel key={key}>
                <img src={image} alt="fruta" className='cards' />
                <hr className='solid' />
                <div className='content'>
                  <p>{desc}</p>
                  <p>{PriceFormat(price)}</p>
                </div>
                <button className='addShop'>+ Adicionar ao Carrinho</button>
              </A.cardCarousel>
            )

          }
        </A.cardItem>
      </A.cardInner>
      <Footer/>
       </C.Container>
    )
}

export default Frutas;