import React from 'react';
import * as C from './HomeStyled'
import imgHome from '../../assets/images/backgrounds/background.png'
import { BsSearch } from "react-icons/bs";


function Home() {
  return (
    <C.Container>
      <C.cardImgHome>
        <img src={imgHome} alt="" />
        
        <C.cardTextHome>
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
      </C.cardImgHome>
       
    </C.Container>
    
  );
}

export default Home;