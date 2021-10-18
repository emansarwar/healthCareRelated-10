import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const threeServices = services.slice(0, 3);
  return (
    <>
      <div className="bg-secondary py-5">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="site-title text-center">MEDI VOLUNTEERING</h1>
            
              <img
                className="header-image"
                src="https://media.istockphoto.com/photos/mature-doctor-and-nurse-discussing-patient-case-picture-id1307543555?b=1&k=20&m=1307543555&s=170667a&w=0&h=KKk1RkwzUkT_a6Kqf0jh7aBEVpIMG048FALjEAPyDp0="
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="card-container">
          {threeServices.map((services) => (
            <Service key={services._id} services={services}></Service>
          ))}
        </Container>
      </div>
    </>
  );
};
export default Home;