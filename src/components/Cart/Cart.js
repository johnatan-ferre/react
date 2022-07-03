import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CarroContext from '../../context/CartContext'
import CarroVacio from '../EmptyCart/EmptyCart'
import './Cart.css'

const Carro = () => {

    const { carro, quitarItem, vaciarCarro, widgetCantidad, precioTotal } = useContext(CarroContext)  
    const cantidad = widgetCantidad()

    if(cantidad === 0)
        return(<CarroVacio />)


    return (
        <div>
            <h1 className='Title'>Carrito de compras</h1>
                
                { carro.map((item) => {
                        return(
                            <div key={item.id} className='Carrito'>
                                <div>{item.name}</div>
                                <div>Cantidad: {item.cantidad}</div>
                                <div>Precio unitario: $ {item.price}</div>
                                <div>Subtotal: $ {item.price * item.cantidad}</div>
                                <button onClick = {() => quitarItem(item.id)} className='Btn-2'>Quitar</button>
                            </div>
                        )})
                }

            <div>
                <div className='Carrito-2'>
                    Total: $ {precioTotal()}
                </div>
                <button onClick={() => vaciarCarro()} className='Btn-2'>Borrar todo</button>
                <Link to= '/' className='Btn'>Seguir Comprando</Link>
                <Link to= '/checkout' className='Btn'>Finalizar Compra</Link>        
            </div>
        </div>
    )
}

export default Carro