import React from 'react';
import { User } from 'phosphor-react';
import * as C from './cartStyle'
import { useContext } from 'react';
import CartItem from '../../components/CartItems';
import { CartContext } from '../../context/CartContext';
import { CartProvider } from '../../context/CartContext';

function Cart() {

    return (
        <C.Container>
                <div>
                    <button>
                        <User
                            size={15}
                            color='#222226'
                        />
                        Minha conta
                    </button>
                </div>
                
                <section>
                    <head>
                        <div className='image'>
                        </div>

                        <div className='name'>
                            <p>Produto</p>
                        </div>

                        <div className='amount'>
                            <p>Quantidade</p>
                        </div>

                        <div className='price'>
                            <p>Preço</p>
                        </div>

                        <div className='discard'> 
                        </div>
                    </head>
                    <CartItem />
                    <footer>
                        <span>
                            <small>
                                Total
                            </small>

                            <h2>
                                1680kz
                            </h2>
                        </span>
                        <button>
                            Finalizar pedido
                        </button>
                    </footer>
                </section>
        </C.Container>
    )
}

export default Cart;