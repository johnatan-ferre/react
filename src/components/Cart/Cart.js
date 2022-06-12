import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CarroContext from '../../context/CartContext'

const Carro = () => {

    const { carro, quitarItem, vaciarCarro, widgetCantidad, precioTotal } = useContext(CarroContext)  
    const cantidad = widgetCantidad()

    return (
        <div>
            <h1>Carrito</h1>
                <div>
                {carro.map(item => {
                        return(
                            <div key={item.id}>
                                <div >{item.name}</div>
                                <div>Cantidad: {item.cantidad}</div>
                                <div>Precio unitario: $ {item.price}</div>
                                <div>Subtotal: $ {item.price * item.cantidad}</div>
                                <button onClick={() => quitarItem(item.id)}>Quitar</button>
                            </div>
                        )})
                }
                </div>
            <div>

            

            { cantidad === 0
                    ? <Link to= '/'>Carrito vacío. Mire nuestros productos</Link> 
                    : [<div>
                    Total: $ {precioTotal()}
                    </div>, 
                    <button onClick={() => vaciarCarro()}>Borrar todo</button>,
                    <Link to= '/'>Seguir Comprando</Link>]}

                
            </div>
        </div>
    )
}

export default Carro