import { Trash, User } from 'phosphor-react';
import { useState } from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import laranja from '../../assets/images/cards/laranja.webp'
import melancia from '../../assets/images/cards/melancia.jpeg'
import mandioca from '../../assets/images/cards/mandioca.jpg'
import * as C from './cartStyle'

function Cart() {
    const [products, setProducts] = useState([
        {
            id: 1,
            img: `${laranja}`,
            amount: 280,
            quantity: 13,
            subtotal: 560,
            productName: 'Limão',
        },

        {
            id: 2,
            img: `${melancia}`,
            amount: 10,
            quantity: 1,
            subtotal: 560,
            productName: 'melancia',
        },

        {
            id: 3,
            img: `${mandioca}`,
            amount: 300,
            quantity: 5,
            subtotal: 560,
            productName: 'mandioca'
        }
    ])

    function deleteProduct(id) {
        const newListProduct = products.filter(product => product.id !== id);
        setProducts(newListProduct)
    }

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
                <C.Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>
                                Subtotal
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(product => (

                            <tr key={product.id}>
                                <td>
                                    <img src={product.img} alt="" />
                                </td>

                                <td>
                                    {product.productName}
                                </td>

                                <td>
                                    <C.ProductQuantityContainer>
                                        <button>
                                            <MdRemoveCircleOutline
                                                size={20}
                                                fill='#ff464c'
                                            />
                                        </button>
                                        <input type="number" readOnly value={product.quantity} />
                                        <button>
                                            <MdAddCircleOutline
                                                size={20}
                                                fill='#4f8d41'
                                            />
                                        </button>
                                    </C.ProductQuantityContainer>
                                </td>

                                <td>
                                    {product.amount}
                                </td>

                                <td>
                                    {product.subtotal}
                                </td>

                                <td width="100%">
                                    <button
                                        onClick={() => deleteProduct(product.id)}
                                        id="trash"
                                    >
                                        <Trash
                                            color='#ff464c'
                                            size={20}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </C.Table>

                <footer>
                    <button>
                        Finalizar pedido
                    </button>

                    <span>
                        <small>
                            Total
                        </small>

                        <h2>
                            1680kz
                        </h2>
                    </span>
                </footer>
            </section>
        </C.Container>
    )
}

export default Cart;