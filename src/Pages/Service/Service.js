import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Service.css";

const Service = ({services}) => {
    const { name, img, description} = services;
    return (
        <div>
            <Card  >
                <Card.Title>{name}</Card.Title>
                <Card.Img className="rounded single-img" variant="middle" src={img} />
                <Card.Body>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Button variant="primary">TAKE THE SERVICES</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;