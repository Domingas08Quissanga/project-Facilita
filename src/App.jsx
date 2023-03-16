import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './page/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import Sobre from './components/Sobre/Sobre';
import Contacts from './components/Contacts/Contact';
import Cart from './page/Cart/index';
import Frutas from './page/Frutas';
import Verduras from './page/Verduras';
import Vegetais from './page/Vegetais';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {window.location.pathname.startsWith('/Login') ? null : <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login/*' element={<LoginForm />} />
          <Route path='/Sobre/*' element={<Sobre />} />
          <Route path='/Contact/*' element={<Contacts />} />
          <Route path='/Carrinho' element={<Cart />} />
          <Route path='/Frutas' element={<Frutas />} />
          <Route path='/Verduras' element={<Verduras />} />
          <Route path='/Vegentais' element={<Vegetais />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;