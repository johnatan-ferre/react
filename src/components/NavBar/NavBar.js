import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='nave'>
            <h1>Grail Store</h1>
            <div className='container'>
                <button className='buttonNav'>Camisas</button>
                <button className='buttonNav'>Pantalones</button>
                <button className='buttonNav'>Camperas</button>
                <button className='buttonNav'>Buzos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar