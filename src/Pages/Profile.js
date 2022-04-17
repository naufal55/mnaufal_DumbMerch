import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardImage from "../Component/CardImage";
import foto from "../Assets/foto.png";
import item from "../Assets/item1.png";
import logo from "../Assets/Logo.png";

const Profile = () => {
  return (
    <Container className="mt-3">
      <Row className="d-flex justify-content-center align-items-start my-auto bg-none">
        <div className=" col-sm-12 col-md-7">
          <h4 className="text-danger my-4">My Profile</h4>
          <Row className="gap-3">
            <Col sm={12} md={5}>
              <CardImage src={foto} />
            </Col>
            <Col sm={12} md={6}>
              <div>
                <p className="text-danger my-1 fw-bold">Name</p>
                <p className="text-light mb-4">Yosep</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Email</p>
                <p className="text-light mb-4">Yosep@gmail.com</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Phone</p>
                <p className="text-light mb-4">08979273882</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Gender</p>
                <p className="text-light mb-4">Male</p>
              </div>
              <div>
                <p className="text-danger my-1 fw-bold">Address</p>
                <p className="text-light mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, dolorem.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="col-sm-12 col-md-5">
          <h4 className="text-danger my-4 ">My Transaction</h4>
          <div>
            <Card className="bg-dark">
              <Card.Body className="py-2">
                <Row className="align-items-center">
                  <CardImage md={3} sm={3} src={item} />
                  <Col md={6} style={{fontSize:"10px"}}>
                    <h5 className="text-danger my-1">Mouse</h5>
                    <p className="text-danger my-1">Saturday, 14 juli 2022</p>
                    <p className="text-light mb-4">Price : Rp.300.000</p>
                    <p className="text-light my-1 fw-bold">Sub Total : Rp.300.000</p>
                  </Col>
                  <CardImage md={3} sm={3} src={logo} />
                </Row>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Profile;
