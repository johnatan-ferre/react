import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}){
    return (
        productos.map(prod => (
            <Item
            key={prod.id}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            stock={prod.stock}
            />
        ))
        
    )
}

export default ItemList