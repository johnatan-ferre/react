import { Link } from "react-router-dom";

const CarroVacio = () => {
    return(
        <div>
            <h2>Su carrito de compras está vacío.</h2>
            <Link to='/'>Vea nuestros productos</Link>
        </div>
    )
}

export default CarroVacio