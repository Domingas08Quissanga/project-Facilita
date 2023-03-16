import React, {useContext, useState} from 'react'
import { Trash } from 'phosphor-react';
import { CartContext } from '../../context/CartContext';

const Item = ({product}) => {
  const [amount, setAmount] = useState(product.amount)
  const { removeProduct} = useContext(CartContext)

  const handleRemoveProduct = (id) => {
    removeProduct(id)
  }

  return (
    <div>
      <div className='image'>
        <img src={product.img} alt=""/>
      </div>

      <div className='name'>
        <p>{product.name}</p>
      </div>

      <div className='amount'>
        <button onClick={
          () => {
            const a = amount - 1
            setAmount(a)
          }
        }>-</button>

        <input type='text' value={amount} />

        <button onClick={
          () => {
            const a = amount - 1
            setAmount(a)
          }
        }>+</button>
      </div>

      <div className='price'>
        {product.pricePerAmount * amount}
      </div>

      <div className='discard'>
        <button
          onClick={() => handleRemoveProduct(product.id)}
          id="trash"
          >
            <Trash
              color='#ff464c'
              size={20}
            />
        </button>
      </div>
    </div> 
  )
}

export default Item