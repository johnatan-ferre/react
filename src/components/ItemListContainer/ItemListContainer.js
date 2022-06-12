import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const { catId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = catId
            ? query(collection(db, 'productos'), where('category', '==', catId))
            : collection(db, 'productos')

        getDocs(collectionRef).then(res => {
            const items = res.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setItems(items)

        }).finally(() => {
            setLoading(false)
        })

        // if(!catId) {
        //     getItems().then(res => {
        //         setItems(res)
        //     }).finally(() =>{
        //         setLoading(false)
        //     })
        // } else {
        //     getItemsByCategory(catId).then(res => {
        //         setItems(res)
        //     }).finally(() =>{
        //         setLoading(false)
        //     })
        // }
        
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

