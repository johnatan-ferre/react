import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CarroContext from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase'

const Carro = () => {

    const { carro, quitarItem, vaciarCarro, widgetCantidad, precioTotal } = useContext(CarroContext)  
    const cantidad = widgetCantidad()

    const crearOrden = ()=> {
        console.log('Se crea la orden')



        const objOrder = {
            buyer: {
                name: 'pepito',
                email: 'pepito@mail.com',
                phone: '123456789'
            },
            items: carro,
            total: precioTotal()       
        }

        const collectionRef = collection(db, 'ordenes')

        addDoc(collectionRef, objOrder)
    }

    return (
        <div>
            <h1>Carrito</h1>
                <div>
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
                </div>
            <div>

            

            { cantidad === 0
                    ? <Link to= '/'>Carrito vacío. Mire nuestros productos</Link> 
                    : [<div>
                    Total: $ {precioTotal()}
                    </div>, 
                    <button onClick={() => vaciarCarro()}>Borrar todo</button>,
                    <button onClick={crearOrden}>Generar orden</button>,
                    <Link to= '/'>Seguir Comprando</Link>]}

                
            </div>
        </div>
    )
}

export default Carro