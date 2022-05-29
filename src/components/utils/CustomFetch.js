import productos from "./productos";

const customFetch = (time, task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    })
}

export default customFetch;



export const getProduct = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}