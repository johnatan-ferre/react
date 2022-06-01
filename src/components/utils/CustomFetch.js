import productos from "./productos";

const customFetch = (time, task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    })
}
export default customFetch;



export const getItems = () => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(productos)
        }, 500)
    })
}






export const getProduct = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}

export const getItemsByCategory = (catId) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(productos.filter(prod => prod.category === catId))
        }, 500)
    })
}