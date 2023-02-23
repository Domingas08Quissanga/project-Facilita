import { Trash, User } from 'phosphor-react';
import productImg from '../../assets/images/cards/limão.jpeg'
import * as C from './cartStyle'

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
                        <tr>
                            <td>
                                <img src={productImg} alt="" />
                            </td>

                            <td>
                                Limão
                            </td>

                            <td>
                                2
                            </td>

                            <td>
                                280kz
                            </td>

                            <td>
                                560kz
                            </td>

                            <td id="trash" width="100%">
                                <button>
                                    <Trash
                                        color='#ff464c'
                                        size={20}
                                    />
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src={productImg} alt="" />
                            </td>

                            <td>
                                Limão
                            </td>

                            <td>
                                2
                            </td>

                            <td>
                                280kz
                            </td>

                            <td>
                                560kz
                            </td>

                            <td id="trash" width="100%">
                                <button>
                                    <Trash
                                        color='#ff464c'
                                        size={20}
                                    />
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src={productImg} alt="" />
                            </td>

                            <td>
                                Limão
                            </td>

                            <td>
                                2
                            </td>

                            <td>
                                280kz
                            </td>

                            <td>
                                560kz
                            </td>

                            <td id="trash" width="100%">
                                <button>
                                    <Trash
                                        color='#ff464c'
                                        size={20}
                                    />
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src={productImg} alt="" />
                            </td>

                            <td>
                                Limão
                            </td>

                            <td>
                                2
                            </td>

                            <td>
                                280kz
                            </td>

                            <td>
                                560kz
                            </td>

                            <td id="trash" width="100%">
                                <button>
                                    <Trash
                                        color='#ff464c'
                                        size={20}
                                    />
                                </button>
                            </td>
                        </tr>
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