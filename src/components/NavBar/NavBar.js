import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nave'>
            <Link to='/'>
            <h2>Grail Store</h2>
            </Link>    
            <div className='container'>
                <Link to= '/category/camisa'>Camisas</Link>
                <Link to= '/category/pantalon'>Pantalones</Link>
                <Link to= '/category/campera'>Camperas</Link>
                <Link to= '/category/buzo'>Buzos</Link>

            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar