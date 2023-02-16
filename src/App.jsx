import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import Sobre from './components/Sobre/Sobre';
import Contacts from './components/Contacts/Contact';
// import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login/*' element={<LoginForm />} />
        <Route path='/Sobre/*' element={<Sobre />} />
        <Route path='/Contact/*' element={<Contacts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;