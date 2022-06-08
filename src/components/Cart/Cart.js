import { useContext } from 'react'
import CarroContext from '../../context/CartContext'

const Carro = () => {

    const { carro, quitarItem, vaciarCarro } = useContext(CarroContext)  

    
    return (
        <div>
            <h1>Carrito</h1>
                <div>
                {carro.map(item => {
                        return(
                            <div key={item.id}>
                                <div >{item.name}</div>
                                <div>Cantidad: {item.cantidad}</div>
                                <div>Precio unitario: ${item.price}</div>
                                <div>Subtotal: ${item.price * item.cantidad}</div>
                                <button onClick={() => quitarItem(item.id)}>Quitar</button>
                            </div>
                        )})
                }
                </div>
            <div>
                <button onClick={() => vaciarCarro()}>Borrar todo</button>
            </div>
        </div>
    )
}

export default Carro