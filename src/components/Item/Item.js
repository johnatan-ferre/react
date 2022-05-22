import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'


function Item({img, name, id, price, stock}) {
    return (
        <Card key={id} style={{ width: '20rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
        </Card.Body>
        <ItemCount stock={stock}/>
        </Card>
            )
}

export default Item