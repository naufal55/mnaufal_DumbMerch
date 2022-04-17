import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import item from "../Assets/item1.png";
import data from '../Assets/DataDummy.js'
import MainButton from "../Atom/MainButton";

const DetailPage = () => {
    const params = useParams()
    const index = params.id
    console.log('ini index',index);
  return (
    <Container className="d-grid mt-3">
      <Row className="gap-4 justify-content-center align-items-center my-auto bg-none">
        <Col md={5} sm={12}>
          <Card className="bg-dark my-3 w-75 mx-auto">
            <Card.Img variant="top" src={item}/>
          </Card>
        </Col>
        <Col md={6} sm={12} className="text-light">
          <h1 className="text-light mb-3">{data[index].namabarang}</h1>
          <p>Stock : {data[index].stok}</p>
          <ul>
            <li>{data[index].list.unggul1}</li>
            <li>{data[index].list.unggul2}</li>
            <li>{data[index].list.unggul3}</li>
            <li>{data[index].list.unggul4}</li>
            <li>{data[index].list.unggul5}</li>
          </ul>
          <p style={{textAlign:'justify'}}>{data[index].detail}</p>
          <h4 className="text-danger fw-bold text-end mb-4">Rp.{data[index].harga}</h4>
          <MainButton type="button" btn="Buy" color="danger"/>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
