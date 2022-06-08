import { useState, createContext } from 'react';

const CarroContext = createContext()

export const CarroContextProvider = ({ children }) => {
    const [carro, setCarro] = useState([])

    const agregarItem = (itemAgregar) => {

        if(!enCarro(itemAgregar.id)) {
            setCarro([...carro, itemAgregar])
        } else {
            const newCarro = carro.map(item => {
                if(item.id === itemAgregar.id) {
                    const newItem = {
                        ...item, cantidad: itemAgregar.cantidad
                    }
                    return newItem
                } else {
                    return item
                }
            })
            setCarro(newCarro)
        }
    }


    
    const widgetCantidad = () => {
        let i = 0
        carro.forEach(item => {
            i += item.cantidad
        })
    
        return i
    }

    const enCarro = (id) => {
        return carro.some(item => item.id === id)
    }

    const traerProducto = (id) => {
        return carro.find(item => item.id === id)
    }

    const quitarItem = (id) => {
        const newCarro = carro.filter(item => item.id !== id)
        setCarro(newCarro)
    }

    const vaciarCarro = () => {
        setCarro([])
    }



    return(
        <CarroContext.Provider value={{carro, agregarItem, quitarItem, traerProducto, widgetCantidad, enCarro, vaciarCarro}}>

            { children }
        </CarroContext.Provider>

    )
}
export default CarroContext







