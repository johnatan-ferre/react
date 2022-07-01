import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

const { id } = useParams( )

    useEffect(()=> {

        getDoc(doc(db, 'productos', id )).then(res => {
            const product = { id: res.id, ...res.data()}
            setProduct(product)
        }).finally(() => {setLoading(false)})
    }, [id])

    if(loading) {
        return <h2>Cargando..</h2>
    }

return (
    <div>
        <ItemDetail {...product}/>
    </div>
)}

export default ItemDetailContainer