import { Link } from "react-router-dom";

const CarroVacio = () => {
    return(
        <div>
            <h2 className="Title">Su carrito de compras está vacío.</h2>
            <div>
                <img src='/images/carrito-vacio.jpg' alt='empty-cart'/>
            </div>
            <Link to='/' className="Btn">Vea nuestros productos</Link>
        </div>
    )
}

export default CarroVacio