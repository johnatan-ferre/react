import React, { useEffect, useState } from 'react'
import { getProduct } from '../utils/CustomFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

const { id } = useParams( )

    useEffect(()=> {
        getProduct(id).then(res => {
            setProduct(res)
        })
    }, [])

return (
    <div>
        <ItemDetail {...product}/>
    </div>
)}

export default ItemDetailContainer