import './ItemDetail.css'

const ItemDetail = ({name, img, desc, price}) => {
    return(
        <div className="DetailCard">
            <div className="DetailContainer">
                <div>
                    <img src={img} alt='Imagen producto'/>
                </div>
                <div className="DetailText">
                    <h1>{name}</h1>
                    <p>{desc}</p>
                    <p>$ {price}</p>
                </div>
            
            </div>

        </div>
        
    )
}

export default ItemDetail