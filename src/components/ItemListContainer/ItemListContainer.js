import React, {useEffect, useState} from 'react'
import {getItems, getItemsByCategory} from '../utils/CustomFetch';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { catId } = useParams()

    useEffect(() => {
        if(!catId) {
            getItems().then(res => {
                setItems(res)
            })
        } else {
            getItemsByCategory(catId).then(res => {
                setItems(res)
            })
        }
        
    }, [catId])

return (
    <div className='contenedorLista'>
        <ItemList productos={items}/>
    </div>
    )
}


export default ItemListContainer

