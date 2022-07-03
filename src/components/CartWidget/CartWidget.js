import { Link } from 'react-router-dom'
import './CartWidget.css'
import { useContext } from 'react'
import CarroContext from '../../context/CartContext'

const CartWidget = () => {

    const { widgetCantidad } = useContext(CarroContext)

    const cantidad = widgetCantidad()
    return (
        <div className='Widget'>
            <Link to='/cart'>
                <img src='/images/cart.svg' alt='cart-widget'/>
                { cantidad }
            </Link>
        </div>
    )
}
export default CartWidget

