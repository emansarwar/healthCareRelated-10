import React from 'react';
import { Button, Card, Col, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";


const Service = ({service}) => {
    
    const {id, name, img, description} = service;
    
    return (
        <Row >
            
             <Col className="card-image">
                <Card className="card-service" >
                    <Card.Title>{name}</Card.Title>
                    <Card.Img className="rounded single-img" variant="middle" src={img} />
                    <Card.Body>
                        <Card.Text className="card-text">{description}</Card.Text>
                        <Link to={`/booking/${id}`}> 
                            <Button variant="warning">ACCEPT THE SERVICE</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            
            
        </Row>
    );
};

export default Service;