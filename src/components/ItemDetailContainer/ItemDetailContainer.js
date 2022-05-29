import React, { useEffect, useState } from 'react'
import { getProduct } from '../utils/CustomFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(()=> {
        getProduct('1').then(res => {
            setProduct(res)
        })
    }, [])


return (
    <div>
        <ItemDetail name={product?.name} 
                    img={product?.img}
                    desc={product?.desc}
                    price={product?.price}/>

    </div>
)}

export default ItemDetailContainer