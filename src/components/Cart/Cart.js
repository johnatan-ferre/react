import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CarroContext from '../../context/CartContext'
import CarroVacio from '../EmptyCart/EmptyCart'

const Carro = () => {

    const { carro, quitarItem, vaciarCarro, widgetCantidad, precioTotal } = useContext(CarroContext)  
    const cantidad = widgetCantidad()

    if(cantidad === 0)
        return(<CarroVacio />)


    return (
        <div>
            <h1>Carrito de compras</h1>
                
                { carro.map((item) => {
                        return(
                            <div key={item.id}>
                                <div>{item.name}</div>
                                <div>Cantidad: {item.cantidad}</div>
                                <div>Precio unitario: $ {item.price}</div>
                                <div>Subtotal: $ {item.price * item.cantidad}</div>
                                <button onClick = {() => quitarItem(item.id)}>Quitar</button>
                            </div>
                        )})
                }

            <div>
                <div>
                    Total: $ {precioTotal()}
                </div>
                <button onClick={() => vaciarCarro()}>Borrar todo</button>,
                <Link to= '/'>Seguir Comprando</Link>
                <Link to= '/checkout'>Finalizar Compra</Link>        
            </div>
        </div>
    )
}

export default Carro