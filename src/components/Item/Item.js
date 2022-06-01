import React from 'react'
import Card from 'react-bootstrap/Card'
// import  ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


function Item({img, name, id, price, stock}) {
    return (
        <div>
            <Card key={id} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Link to={`/item/${id}`}>Más detalles</Link>
            </Card.Body>
            {/* <ItemCount stock={stock}/> */}
            </Card>
        </div>
            )
}

export default Item