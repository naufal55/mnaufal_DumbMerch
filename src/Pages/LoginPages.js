import React from "react";
import { Container, Row } from "react-bootstrap";
import BodyPages from "../Component/BodyPages";
import CardFormLog from "../Component/CardFormLog";

const LoginPages = (props) => {
  return (
    <Container className="d-grid vh-100">
    <Row className="gap-4 justify-content-center align-items-center my-auto bg-none">
        <BodyPages colorLog="none" colorReg="danger" disableLog="disabled"/>
        <CardFormLog btnName="Login"/>
      </Row>
    </Container>
  );
};

export default LoginPages;
