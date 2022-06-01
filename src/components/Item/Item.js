import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


function Item({img, name, id, price, stock}) {
    return (
        <div className='CardItem'>
            <Card key={id} style={{ width: '140px', objectFit: 'cover', borderRadius: '10px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>$ {price}</Card.Text>
                <Link to={`/item/${id}`}>Más detalles</Link>
            </Card.Body>
            </Card>
        </div>
            )
}

export default Item