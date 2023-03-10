import React from 'react';
import cuate from "../../assets/cuate.png"
// import { Container } from './styles';
import { Footer } from '../Footer/Footer'
import * as C from './contactStyled'
import SlideImg from '../Slide/SlideImg';

function Contacts() {
  return (
    <div>
      <C.ContInfo>
        <SlideImg />
        <C.Info>
        <h1>Pretende entrar em contacto comnosco ? envie ma mensagem para o nosso email

        </h1>
  
          <form>
            <h3>Contacte-nos</h3>
            <input type="email" placeholder="Digite o seu Email" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Enviar</button>
          </form>
          <img src={cuate} alt="footer" />

        </C.Info>
        <Footer />
      </C.ContInfo>
    </div>
  );

}

export default Contacts;