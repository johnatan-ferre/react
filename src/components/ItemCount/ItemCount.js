import React, { useState } from 'react'


function ItemCount({stock, inicio=1, onAdd}) {
    const [count, setCount] = useState(inicio);

    function agregar() {
        if(count < stock){
            setCount(count + 1);
        }
    }

function quitar() {
    if(count > 1) {
        setCount(count - 1);
    }
}

    return (
    <div>
        <div>
            <button onClick={quitar}>-</button>
            <p>{count}</p>
            <button onClick={agregar}>+</button>
        </div>

        <button onClick={() => onAdd(count)}>Comprar</button>
    </div>
    )
}

export default ItemCount