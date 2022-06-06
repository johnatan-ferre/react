import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({name, img, desc, price, stock}) => {

    const [cantidad, setCantidad] = useState(0)

    const handleOnAdd = (count) => {
        setCantidad(count)
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
        { cantidad > 0 ? <Link to='/cart'>Termine su compra</Link> :
        <ItemCount stock = {stock} onAdd={handleOnAdd}/>}
        </div>
        
    )
}

export default ItemDetail