import { Link } from 'react-router-dom'

const Thankyou = () => {
    return(
        <div>
            <h2 className="Title">Gracias por su compra</h2>
            <div>
                <img src='/images/thank-you.jpg' alt='empty-cart'/>
            </div>
            <Link to='/' className="Btn">Inicio</Link>
        </div>
    )
}

export default Thankyou