import React, {useEffect, useState} from 'react'
import customFetch from '../utils/CustomFetch';
import productos from '../utils/productos';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        customFetch(2000, productos)
        .then(res => setItems(res))
    }, [items]);


return (
    <div className='contenedorLista'>
        <ItemList productos={items}/>
    </div>
    )
}


export default ItemListContainer

