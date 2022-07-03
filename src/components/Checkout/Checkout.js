import { useForm } from "react-hook-form";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from "../../services/firebase";
import { useContext, useState } from "react";
import CarroContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import './Checkout.css'



const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { carro, precioTotal, vaciarCarro } = useContext(CarroContext)
    const navigate = useNavigate()

    const [buyer, setBuyer] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {
        setBuyer({...buyer, [e.target.name] : e.target.value})
    }

    const crearOrden = (e)=> {
        setLoading(true)

        const objOrder = {
            buyer: buyer,
            items: carro,
            total: precioTotal()       
        }

        const ids = carro.map(item => item.id)
        const batch = writeBatch(db)
        const sinStock = [];
        
        const collectionRef = collection(db, 'productos');

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(res => {
            res.docs.forEach(doc => {
                const dataDoc = doc.data()
                const itemCantidad = carro.find(item => item.id === doc.id)?.cantidad

                if(dataDoc.stock >= itemCantidad) {
                    batch.update(doc.ref, {stock: dataDoc.stock - itemCantidad})
                } else {
                    sinStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(sinStock.length === 0) {
                const collectionRef = collection(db, 'ordenes')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({type: 'sin_stock', productos: sinStock})
            }
        }).then(({id}) => {
            batch.commit();
            swal.fire({
                title: `Agradecemos su compra ${buyer.nombre}`,
                text: `Fue creada una orden con la identificación: ${id}`,
                icon: 'success'});
            vaciarCarro();
            navigate('/thankyou');
        }).catch((error) => {
            swal.fire({
                title: 'Disculpe',
                text: 'La cantidad solicitada excede el stock disponible',
                icon: 'error'});
            vaciarCarro();
            navigate('/');
        }).finally(() => {setLoading(false)})
    }
    
    if(loading) {
        return <h2>Generando orden de compra..</h2>
    }

    
    
    return( 
        <div>
            <h2 className='Title'>Orden de compra</h2>
            <form onSubmit={handleSubmit(crearOrden)} className='Form'>
                <div className='Item-form'>
                    <label>Nombre</label>
                    <input type='text' placeholder='Nombre' {...register('nombre', {required: true})}
                    onChange={handleInputChange}
                    value={buyer.nombre} />
                    {errors.nombre?.type === 'required' && <p>El nombre es un campo obligatorio.</p>}
                </div>
                <div className='Item-form'>
                    <label>E-mail</label>
                    <input type='text' placeholder='Email' {...register('email', {required: true,
                    pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/})}
                    onChange={handleInputChange}
                    value={buyer.email} />
                    {errors.email?.type === 'required' && <p>La dirección de correo es un campo obligatorio.</p>}
                    {errors.email?.type === 'pattern' && <p>Ha ingresado un formato incorrecto para el mail.</p>}
                </div>
                <div className='Item-form'>
                    <label>Teléfono</label>
                    <input type='number' placeholder='Telefono' {...register('telefono', {required: true})}
                    onChange={handleInputChange}
                    value={buyer.telefono} />
                    {errors.telefono?.type === 'required' && <p>El teléfono es un campo obligatorio.</p>}
                </div>
                <button type='submit'className='Btn'>Enviar</button>
            </form>
        </div> 
)}

export default Checkout