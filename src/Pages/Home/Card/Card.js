import React from 'react';
import  { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Service from "../../Service/Service";
import "./Card.css";

const Card = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const threeServices = services.slice(0, 3);
    return (
        <div id="cards">
            
          <Container className="card-container">
            {
            threeServices.map((service) => (
              <Service 
              key={service.id} 
              service={service}
              ></Service>
            ))}
          </Container>
         
        </div>
    );
};

export default Card;