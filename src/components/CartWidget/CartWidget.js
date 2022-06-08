import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CarroContext from '../../context/CartContext'

const CartWidget = () => {

    const { widgetCantidad } = useContext(CarroContext)

    const cantidad = widgetCantidad()
    return (
        <Link to='/cart'>
            <img src='./images/cart.svg' alt='cart-widget'/>
            { cantidad }
        </Link>
    )
}
export default CartWidget

