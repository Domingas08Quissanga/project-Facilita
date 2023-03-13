import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Item from '../Item';

function CartItems() {
  const {products } = useContext(CartContext)

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Item product={product}/>
        </li>
      ))}
    </ul>
  )
}

export default CartItems