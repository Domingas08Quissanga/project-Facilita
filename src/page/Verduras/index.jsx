import React from 'react'
import imgUrl from '../../assets/verdurasFundo.jpg'
import {Footer} from '../../components/Footer/Footer'
import { ImageCards } from '../../components/Cards/cardVerdura'
import { PriceFormat } from '../../utils/numberFormat'
import VerduraDesc from '../../assets/verduraBanner.png'
import * as C from '../Frutas/productsStyled'
import * as A from '../../page/Home/HomeStyled'
export function Verduras() {
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
           <h4><span>Verduras</span> frescas, limpas e saudaveis</h4> 
           </div>
           <C.bannerProduct>
            <img src={VerduraDesc} alt="" />
          <div>
             <p>Além de serem ricos em vitaminas, minerais e fibras, alguns legumes 
              e verduras também contêm benefícios específicos para a nossa saúde. A inclusão 
              destes alimentos na dieta melhora o humor, a disposição e o bem-estar.
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
export default Verduras;