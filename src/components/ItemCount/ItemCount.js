import React, { useState } from 'react'

function ItemCount({stock}) {
    const [count, setCount] = useState(0);

    function agregar (){
        if(count < stock){
            setCount(count + 1);
        }
    }

function quitar () {
    if(count > 0) {
        setCount(count - 1);
    }
}

function onAdd (){
    alert('Agregó ' + count + ' productos a su carrito.');

}
    return (
    <div>
        <div>
            <button onClick={quitar}>-</button>
            <p>{count}</p>
            <button onClick={agregar}>+</button>
        </div>

        <button onClick={onAdd}>Comprar</button>
    </div>
    )
}

export default ItemCount