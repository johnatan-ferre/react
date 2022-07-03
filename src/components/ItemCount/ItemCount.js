import React, { useState } from 'react'
import './ItemCount.css'


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
    <div  className='Contador'>
        <div className='Contador2'>
            <button onClick={quitar} className='Btn'>-</button>
            <p>{count}</p>
            <button onClick={agregar} className='Btn'>+</button>
        </div>

        <button onClick={() => onAdd(count)} className='Btn'>Comprar</button>
    </div>
    )
}

export default ItemCount