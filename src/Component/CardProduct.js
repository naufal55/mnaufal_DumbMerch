import React from "react";
import { Card, Col, Form } from "react-bootstrap";
import item from "../Assets/item1.png";

const CardProduct = (props) => {
  return (
    <Col lg={2} md={4} sm={6}>
      <Card className="bg-dark my-3" >
        <Card.Img variant="top" src={item} onClick={props.click} />
        <Card.Body className="text-white py-1">
          <h5 className="text-danger my-2">{props.nBarang}</h5>
          <p className="my-1">{props.harga}</p>
          <p className="my-1">Stok : {props.stok}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProduct;
