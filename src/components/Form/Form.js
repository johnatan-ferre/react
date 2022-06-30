import { useForm } from "react-hook-form"


const form = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return <div>
        <h2>Form(nombre que le corresponda)</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type='text' placeholder='Nombre' {...register('nombre', {
                    required: true
                })} />
                {errors.nombre?.type === 'required' && <p>El nombre es un campo requerido.</p>}
            </div>
            <div>
                <label>Email</label>
                <input type='text' placeholder='Email' {...register('email', {
                    required: true,
                    pattern: /^[\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'required' && <p>La dirección de correo es un campo requerido.</p>}
                {errors.email?.type === 'pattern' && <p>Ha ingresado un formato incorrecto para el mail.</p>}
            </div>
            <div>
                <label>Telefono</label>
                <input type='text' placeholder='Telefono' {...register('telefono', {
                    required: true
                })} />
                {errors.telefono?.type === 'required' && <p>El teléfono es un campo requerido.</p>}
            </div>
            <input type='submit' value='Enviar' />
        </form>



    </div> 
}

export default form