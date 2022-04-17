import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import item from "../Assets/item1.png";
import data from "../Assets/DataDummy.js";
import MainButton from "../Atom/MainButton";
import CardImage from "../Component/CardImage";

const DetailPage = () => {
  const params = useParams();
  const index = params.id;
  const navigate = useNavigate()

  return (
    <Container className="d-grid mt-3">
      <Row className="gap-4 justify-content-center align-items-center my-auto bg-none">
        <CardImage sm="12" md="4" src={item} />
        <Col md={7} sm={12} className="text-light">
          <h1 className="text-light mb-3">{data[index].namabarang}</h1>
          <p>Stock : {data[index].stok}</p>
          <ul>
            <li>{data[index].list.unggul1}</li>
            <li>{data[index].list.unggul2}</li>
            <li>{data[index].list.unggul3}</li>
            <li>{data[index].list.unggul4}</li>
            <li>{data[index].list.unggul5}</li>
          </ul>
          <p style={{ textAlign: "justify" }}>{data[index].detail}</p>
          <h4 className="text-danger fw-bold text-end mb-4">
            Rp.{data[index].harga}
          </h4>
          <MainButton type="button" btn="Buy" click={()=>navigate('/profile')} color="danger" />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
