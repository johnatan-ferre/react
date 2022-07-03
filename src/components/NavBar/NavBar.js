import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CarroContext from '../../context/CartContext'

const NavBar = () => {

    const { widgetCantidad } = useContext(CarroContext)
    const cantidad = widgetCantidad()

    return (
        <nav className='Nave'>
            <Link to='/'>
            <h2 className='Title'>Grail Store</h2>
            </Link>    
            <div className='Container'>
                <Link to= '/category/camisa' className='Btn-nav'>Camisas</Link>
                <Link to= '/category/pantalon' className='Btn-nav'>Pantalones</Link>
                <Link to= '/category/campera' className='Btn-nav'>Camperas</Link>
                <Link to= '/category/buzo' className='Btn-nav'>Buzos</Link>

            </div>
            {cantidad > 0 && <CartWidget/>}
        </nav>
    )
}

export default NavBar