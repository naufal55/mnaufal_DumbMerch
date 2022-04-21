import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import InputColumn from "../Atom/InputColumn";
import MainButton from "../Atom/MainButton";
import data from "../Assets/DataDummy.js";

const EditProduct = () => {
  const params = useParams();
  const index = params.id;
  const [state, setState] = useState({
    namabarang: "",
    detail: "",
    harga: "",
    stok: "",
  });
  const handleOnChange = (e) => {
    //update nilai saat isi value di kolom input
    // setState here
    setState({
      ...state, //extarct state
      //beri nilai setState untuk value yg di kolom input, sesuai dengna name form control
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };
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
        <InputColumn
          holder={data[index].namabarang}
          value={state.namabarang}
          change={handleOnChange}
          name="namabarang"
        />
        <InputColumn
          holder={data[index].detail}
          value={state.detail}
          change={handleOnChange}
          name="detail"
          as="textarea"
          rows={3}
        />
        <InputColumn
          holder={data[index].harga}
          value={state.harga}
          change={handleOnChange}
          name="harga"
        />
        <InputColumn
          holder={data[index].stok}
          value={state.stok}
          change={handleOnChange}
          name="stok"
        />
      </div>
      <MainButton color="success" btn="Save" />
    </Container>
  );
};

export default EditProduct;
