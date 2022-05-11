import './NavBar.css'
const NavBar = () => {
    return (
        <nav className='nave'>
            <h1>Grail Store</h1>
            <div className='container'>
                <button className='buttonNav'>Remeras</button>
                <button className='buttonNav'>Camperas</button>
                <button className='buttonNav'>Pantalones</button>
                <button className='buttonNav'>Camisas</button>
            </div>
        </nav>
    )
}

export default NavBar