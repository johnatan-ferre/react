import React, {useEffect, useState} from 'react'
import {getItems, getItemsByCategory} from '../utils/CustomFetch';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const { catId } = useParams()

    useEffect(() => {

        setLoading(true)

        if(!catId) {
            getItems().then(res => {
                setItems(res)
            }).finally(() =>{
                setLoading(false)
            })
        } else {
            getItemsByCategory(catId).then(res => {
                setItems(res)
            }).finally(() =>{
                setLoading(false)
            })
        }
        
    }, [catId])

    if(loading) {
        return <h2>Cargando..</h2>

    }

return (
    <div className='contenedorLista'>
        <ItemList productos={items}/>
    </div>
    )
}


export default ItemListContainer

