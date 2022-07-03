import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import  CarroContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, desc, price, stock }) => {

    const [cantidad, setCantidad] = useState(0)
    const { agregarItem, traerProducto } = useContext(CarroContext)

    const handleOnAdd = (cantidad) => {
        setCantidad(cantidad)

        agregarItem({ id, name, price, cantidad})

    }
    return(
        <div className="DetailCard">
            <div className="DetailContainer">
                <div>
                    <img src={img} alt={name}/>
                </div>
                <div className="DetailText">
                    <h1>{name}</h1>
                    <p>{desc}</p>
                    <p>$ {price}</p>  
                </div>
            </div>
        { cantidad > 0 
                    ?<Link to='/cart' className='Btn'>Termine su compra</Link> 
                    :<ItemCount stock = {stock} onAdd={handleOnAdd} initial={traerProducto(id)?.cantidad}/>}
        </div>
        
    )
}

export default ItemDetail