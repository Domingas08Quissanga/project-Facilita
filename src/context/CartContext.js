import React, { useState, createContext } from "react";
import laranja from '../../src/assets/images/cards/laranja.webp';



export const CartContext = createContext({})

export const CartProvider = ({children}) => {
  const [products, setProducts] = useState([
    {
        id: 1,
        img: `${laranja}`,
        pricePerAmount: 280,        
        amount: 13,
        name: 'Laranja',
    },
    {
      id: 2,
      img: `${laranja}`,
      pricePerAmount: 280,
      amount: 1300,
      name: 'Limão',
    },
    
  ])

  const [total, setTotal] = useState()

  function removeProduct(id) {
    const newListProduct = products.filter(product => product.id !== id);
    setProducts(newListProduct)
  }

  const addProduct = (id) => {
    const productsList = products
    const item = productsList.filter(product => product.id === id)

    if(!item){
      console.log("")
    }
  }

  return (
    <CartContext.Provider value={{products, setProducts, removeProduct, addProduct}}>
      {children}
    </CartContext.Provider>
  )
}