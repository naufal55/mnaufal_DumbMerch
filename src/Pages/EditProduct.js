import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InputColumn from "../Atom/InputColumn";
import MainButton from "../Atom/MainButton";

const EditProduct = () => {
  return (
    <Container>
      <h4 className="text-light my-4">Edit Category</h4>
      <div className="my-5">
        <Row>
          <Col md={2}>
            <MainButton color="success" btn="Upload Image" />
          </Col>
          <Col>
            <p>Mouse.jpg</p>
          </Col>
        </Row>
        <InputColumn />
        <InputColumn />
        <InputColumn as="textarea" rows={3}/>
        <InputColumn />
      </div>
      <MainButton color="success" btn="Save" />
    </Container>
  );
};

export default EditProduct;
